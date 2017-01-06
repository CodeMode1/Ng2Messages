import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';
import { ErrorService } from '../errors/error.service';

@Component({
    moduleId: module.id,
    selector: 'my-message',
    templateUrl: 'message.component.html' ,
     styles: [`
        .author{
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config{
            display: inline-block;
            font-style: right;
            font-size: 12px;
            width: 19%;
        }
    `
    ]

})
export class MessageComponent implements OnInit {
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();
    color = '#ADD8E6';
    show: boolean = true;
    
    constructor(private messageService: MessageService, private errorService: ErrorService) { }

    ngOnInit() { }

    /*
    onClick(){
        this.editClicked.emit('changed');
    }
    */

    onDelete(){
        this.messageService.deleteMessage(this.message)
            .subscribe(
                data => console.log(data),
                error => this.errorService.handleError(error)
            );
    }

    onEdit(){
        this.messageService.editMessage(this.message)
    }

    //so that only the logged user can see the deleted and edit buttons (because we dont want him to delete or edit messages other's messages)
    //if he could click the buttons, the actions would happen on the front end but not the back end (because of the protection coded)
    belongsToUser(){
        return localStorage.getItem('userId') === this.message.userId;
    }
}