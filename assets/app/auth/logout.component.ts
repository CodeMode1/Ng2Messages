import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-logout',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <button class="btn btn-danger" (click)="onLogout()">Logout</button>
        </section>
    `
})
export class LogoutComponent implements OnInit {
    constructor(private authService: AuthService, private router:Router) { }

    ngOnInit() { }

    onLogout(){
        this.authService.logOut();
        this.router.navigate(['../auth/signin']);
    }
}