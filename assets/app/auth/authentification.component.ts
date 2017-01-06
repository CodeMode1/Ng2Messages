import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-auth',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
                    <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signin']">Signin</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['logout']">Logout</a></li>
                </ul>
            </nav>
        </header>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        .router-link-active{
            color:#555;
            cursor: pointer;
            background-color: #fff;
            border: #px solid #ddd;
            border-bottom-color: transparent;
        }

    `]
})
export class AuthentificationComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit() { 
    }

    isLoggedIn(){
        return this.authService.isLoggedIn();
    }
}