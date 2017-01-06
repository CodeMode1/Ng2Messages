import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-messages',
    template: `
        <div class="row spacing">
            <my-message-input></my-message-input>
        </div>
        <div class="row spacing">
            <my-message-list></my-message-list>
        </div>
    `
})
export class MessagesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}