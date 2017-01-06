import { Component } from '@angular/core';
import { Message } from './messages/message';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: ` 
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div> 
        <my-error></my-error>  
    `
})
export class AppComponent {

    /*
    customMessage: Message;
    newMessage($event){
        this.customMessage = $event;
    }
    */

    /*
    message = {
        content: 'A message',
        author: 'Max'
    };
    */
}