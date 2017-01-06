import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MessageService {
    messages: Message[] = [];
    isMessageEdit = new EventEmitter<Message>();

    constructor(private http: Http) { }

    // configuring the request. Request only sent to server when subscribing to it : 
    // in the component responsable of the task in this case message-input where we create the message with its content :
    // we want to send to the server 
    addMessage(message: Message){
        //the body of the req takes a JSON string
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('http://localhost:3000/message' + token, body, {headers: headers})
            .map((response: Response) => {
                const data = response.json().obj;
                let message = new Message(data.content, data._id, data.user.firstName, data.user._id);
                return message;
            })
            .catch(error => Observable.throw(error.json() || 'server error'));
        
        /* without backend
        this.messages.push(message);
        */
    }

    getMessages(){
        return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                // dont assign data => this.messages = response.json().obj directly 'cause the messages are logged in the console
                // with their generated id, content but we also want the userName and userId
                const data = response.json().obj;
                let objs: any[] = [];
                for(let i=0; i < data.length; i++){
                    let message = new Message(data[i].content, data[i]._id, data[i].user.firstName, data[i].user._id);
                    objs.push(message);
                };
                return objs;
            })
            .catch(error => Observable.throw(error.json() || 'server error'));
        /*
        return this.messages;
        */
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.delete('http://localhost:3000/message/'+ message.messageId + token)
            .map((response: Response) => response.json())
            .catch(error => Observable.throw(error.json()));
    }
    
    editMessage(message: Message){
        //this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'Dummy');
        this.isMessageEdit.emit(message);
    }

    //send the updated message to the server
    updateMessage(message: Message){
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch(error => Observable.throw(error.json()));
    }

}