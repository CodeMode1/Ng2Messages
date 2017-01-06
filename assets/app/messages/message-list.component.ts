import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';
import { ErrorService } from '../errors/error.service';

@Component({
    moduleId: module.id,
    selector: 'my-message-list',
    template: `
    <section class="col-md-8 col-md-offset-2">
        <my-message *ngFor="let message of messages" [message]="message" (editClicked)="message.content = $event"></my-message>
    </section>
    `
})
export class MessageListComponent implements OnInit{
    messages: Message[];
    //@Input() customMessage: Message;

    /*
    messages: Message[] = [
        new Message('A new message', null, 'Max'),
        new Message('Another message', null, 'Anna')
    ];
    */
    constructor(private messageService: MessageService, private errorService:ErrorService) { }

    ngOnInit() { 
        this.messageService.getMessages()
            .subscribe(
                messages => {
                    this.messages = messages;
                    this.messageService.messages = messages;
                },
                error => this.errorService.handleError(error)
            );
    }

/*
    ngOnChanges(){
        this.messages.push(this.customMessage);
    }
    */
}