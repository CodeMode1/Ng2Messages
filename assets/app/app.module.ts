import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provide } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';
import { MessageService } from './messages/message.service';
import { MessagesComponent } from './messages/messages.component';
import { AuthentificationComponent } from './auth/authentification.component';
import { HeaderComponent } from './header.component';

import { LogoutComponent } from './auth/logout.component';
import { SignInComponent } from './auth/signin.component';
import { SignUpComponent } from './auth/signup.component';
import { AuthService } from './auth/auth.service';

//errors
import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';

//routing
import { routing } from './app.routes';

@NgModule({
declarations: [AppComponent, MessageComponent, MessageListComponent,
     MessageInputComponent, AuthentificationComponent, MessagesComponent, 
     HeaderComponent, LogoutComponent, SignInComponent, SignUpComponent, ErrorComponent],
imports: [BrowserModule, FormsModule, ReactiveFormsModule, routing, HttpModule],
bootstrap: [AppComponent],
providers: [MessageService, provide(LocationStrategy, {useClass: HashLocationStrategy}), AuthService, ErrorService]
})
export class AppModule {}
