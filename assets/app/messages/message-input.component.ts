import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';
import { ErrorService } from '../errors/error.service';
import { AuthService } from '../auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-message-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
                <div class="form-group">
                    <label for="content">Content</label>
                    <input ngModel name="content" type="text" class="form-control" id="content" #input [ngModel]="messageEdit?.content">
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!f.valid">Send Message</button>
                <button type="submit" class="btn btn-primary" [disabled]="!isEdit">Save</button>
                <button type="button" class="btn btn-danger" (click)="onCancel()" *ngIf="isEdit">Cancel</button> 
            </form>
        </section>
    `
    /*
    *  <button type="submit" class="btn btn-primary" [disabled]="!f.valid">{{ !messageEdit ? 'Send Message' : 'Save Message' }}</button> 
    * <button type="text" class="btn btn-danger" (click)="onCancel()" *ngIf="messageEdit">Cancel</button> 
    */
})
export class MessageInputComponent implements OnInit{
    messageEdit: Message = null;
    isEdit: boolean = false;

    //@Output() customContent = new EventEmitter<Message>();

    constructor(private messageService: MessageService, private errorService:ErrorService, private authService: AuthService) { }

    ngOnInit(){
        this.messageService.isMessageEdit.subscribe(
            message => {
                //setting a reference
                this.messageEdit = message;
                /*
                console.log('message Edit' + this.messageEdit.content + this.messageEdit.messageId + this.messageEdit.userId + this.messageEdit.userName);
                console.log('message ' + message.content + message.messageId + message.userId + message.userName);
                */
                this.isEdit = true;
            },
            error => console.log(error)
        );
    }

    onSubmit(form: any) { 
        if(this.isEdit){
        // Edit >> LIVE UPDATE in the browser not the db
            this.messageEdit.content = form.content;
            this.messageService.updateMessage(this.messageEdit)
                .subscribe(
                    data => console.log(data),
                    error => this.errorService.handleError(error)
                );
            // CLEAR INPUT BOX :not overiding the message object but only the reference (the property messageEdit)
            // to a new object 
            //no more message in the input but the service still contains the original message used by the list 
            this.messageEdit = null;
        }else{
            const message: Message = new Message(form.content, null, 'Dummy');
            console.log(message);
            this.messageService.addMessage(message)
                .subscribe(
                    data => {
                    console.log(data);
                        this.messageService.messages.push(data);
                    },
                    error => this.errorService.handleError(error)
                );
        }
    }

    onCancel(){
        this.messageEdit = null;
    }

 
/*
    onCreate(content: string){
        (click)="onCreate(input.value)"
        const message: Message = new Message(content, null, 'Dummy');
        console.log(message);
        this.messageService.addMessage(message);
        //this.customContent.emit(message);
    }
    */
}