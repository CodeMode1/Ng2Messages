import '../zone';
import {patchTimer} from '../common/timers';

const set = 'set';
const clear = 'clear';
const _global = typeof window === 'object' && window || typeof self === 'object' && self || global;

// Timers
const timers = require('timers');
patchTimer(timers, set, clear, 'Timeout');
patchTimer(timers, set, clear, 'Interval');
patchTimer(timers, set, clear, 'Immediate');

const shouldPatchGlobalTimers = global.setTimeout !== timers.setTimeout;

if (shouldPatchGlobalTimers) {
  patchTimer(_global, set, clear, 'Timeout');
  patchTimer(_global, set, clear, 'Interval');
  patchTimer(_global, set, clear, 'Immediate');
}


// Crypto
let crypto;
try {
  crypto = require('crypto');
} catch (err) {}

// TODO(gdi2290): implement a better way to patch these methods
if (crypto) {
  let nativeRandomBytes = crypto.randomBytes;
  crypto.randomBytes = function randomBytesZone(size: number, callback?: Function) {
    if (!callback) {
      return nativeRandomBytes(size);
    } else {
      let zone = Zone.current;
      var source = crypto.constructor.name + '.randomBytes';
      return nativeRandomBytes(size, zone.wrap(callback, source));
    }
  }.bind(crypto);

  let nativePbkdf2 = crypto.pbkdf2;
  crypto.pbkdf2 = function pbkdf2Zone(...args: any[]) {
    let fn = args[args.length - 1];
    if (typeof fn === 'function') {
      let zone = Zone.current;
      var source = crypto.constructor.name + '.pbkdf2';
      args[args.length - 1] = zone.wrap(fn, source);
      return nativePbkdf2(...args);
    } else {
      return nativePbkdf2(...args);
    }
  }.bind(crypto);
}
