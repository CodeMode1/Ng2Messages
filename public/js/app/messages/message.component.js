"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var message_1 = require('./message');
var message_service_1 = require('./message.service');
var error_service_1 = require('../errors/error.service');
var MessageComponent = (function () {
    function MessageComponent(messageService, errorService) {
        this.messageService = messageService;
        this.errorService = errorService;
        this.editClicked = new core_1.EventEmitter();
        this.color = '#ADD8E6';
        this.show = true;
    }
    MessageComponent.prototype.ngOnInit = function () { };
    /*
    onClick(){
        this.editClicked.emit('changed');
    }
    */
    MessageComponent.prototype.onDelete = function () {
        var _this = this;
        this.messageService.deleteMessage(this.message)
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this.errorService.handleError(error); });
    };
    MessageComponent.prototype.onEdit = function () {
        this.messageService.editMessage(this.message);
    };
    //so that only the logged user can see the deleted and edit buttons (because we dont want him to delete or edit messages other's messages)
    //if he could click the buttons, the actions would happen on the front end but not the back end (because of the protection coded)
    MessageComponent.prototype.belongsToUser = function () {
        return localStorage.getItem('userId') === this.message.userId;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MessageComponent.prototype, "editClicked", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message',
            templateUrl: 'message.component.html',
            styles: ["\n        .author{\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config{\n            display: inline-block;\n            font-style: right;\n            font-size: 12px;\n            width: 19%;\n        }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, error_service_1.ErrorService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0QsZUFBZSxDQUFDLENBQUE7QUFDL0Usd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBdUJ2RDtJQU1JLDBCQUFvQixjQUE4QixFQUFVLFlBQTBCO1FBQWxFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSjVFLGdCQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7UUFDbkQsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixTQUFJLEdBQVksSUFBSSxDQUFDO0lBRXFFLENBQUM7SUFFM0YsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFFZDs7OztNQUlFO0lBRUYsbUNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMxQyxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFwQyxDQUFvQyxDQUNoRCxDQUFDO0lBQ1YsQ0FBQztJQUVELGlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUVELDBJQUEwSTtJQUMxSSxpSUFBaUk7SUFDakksd0NBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2xFLENBQUM7SUEvQkQ7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3lEQUFBO0lBdkJiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3BDLE1BQU0sRUFBRSxDQUFDLHlUQWFUO2FBQ0E7U0FFSixDQUFDOzt3QkFBQTtJQWtDRix1QkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksd0JBQWdCLG1CQWlDNUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdtZXNzYWdlLmNvbXBvbmVudC5odG1sJyAsXHJcbiAgICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5hdXRob3J7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb25maWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogcmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE5JTtcclxuICAgICAgICB9XHJcbiAgICBgXHJcbiAgICBdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBtZXNzYWdlOiBNZXNzYWdlO1xyXG4gICAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgICBjb2xvciA9ICcjQUREOEU2JztcclxuICAgIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSwgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgICAvKlxyXG4gICAgb25DbGljaygpe1xyXG4gICAgICAgIHRoaXMuZWRpdENsaWNrZWQuZW1pdCgnY2hhbmdlZCcpO1xyXG4gICAgfVxyXG4gICAgKi9cclxuXHJcbiAgICBvbkRlbGV0ZSgpe1xyXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZGVsZXRlTWVzc2FnZSh0aGlzLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FZGl0KCl7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5lZGl0TWVzc2FnZSh0aGlzLm1lc3NhZ2UpXHJcbiAgICB9XHJcblxyXG4gICAgLy9zbyB0aGF0IG9ubHkgdGhlIGxvZ2dlZCB1c2VyIGNhbiBzZWUgdGhlIGRlbGV0ZWQgYW5kIGVkaXQgYnV0dG9ucyAoYmVjYXVzZSB3ZSBkb250IHdhbnQgaGltIHRvIGRlbGV0ZSBvciBlZGl0IG1lc3NhZ2VzIG90aGVyJ3MgbWVzc2FnZXMpXHJcbiAgICAvL2lmIGhlIGNvdWxkIGNsaWNrIHRoZSBidXR0b25zLCB0aGUgYWN0aW9ucyB3b3VsZCBoYXBwZW4gb24gdGhlIGZyb250IGVuZCBidXQgbm90IHRoZSBiYWNrIGVuZCAoYmVjYXVzZSBvZiB0aGUgcHJvdGVjdGlvbiBjb2RlZClcclxuICAgIGJlbG9uZ3NUb1VzZXIoKXtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpID09PSB0aGlzLm1lc3NhZ2UudXNlcklkO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
