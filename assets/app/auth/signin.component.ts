import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from './user';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ErrorService } from '../errors/error.service';

@Component({
    moduleId: module.id,
    selector: 'my-signin',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form [formGroup]="signinForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="form-control" formControlName="email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" formControlName="password">
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!signinForm.valid">Sign In</button>
            </form>
        </section>
    `
})
export class SignInComponent implements OnInit {
    signinForm: FormGroup;
    
    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private errorService:ErrorService) { }
    
    onSubmit(){
        console.log(this.signinForm.value);
        const user = new User(this.signinForm.value.email, this.signinForm.value.password);
        console.log('sign in' + user.email + user.password);
        this.authService.signIn(user)
            .subscribe(
                data => {
                    //he we store the token client side in local storage (html5 concept) to store in the browser
                    // will be accessible in all the app
                    //storing the user 
                    localStorage.setItem('token', data.token);
                    //storing the user's id , to identify if a message was written by a certain user
                    //stores the id of the currently logged user, so that in front end we can disable buttons for unauthorized users
                    localStorage.setItem('userId', data.userId);
                    //to get to the root route (index route)
                    this.router.navigateByUrl('/');
                },
                error => this.errorService.handleError(error)
            );
    }
    
    //ou Validators.pattern (pour le email)
    ngOnInit() { 
        this.signinForm = this.fb.group({
            email: ['', [Validators.required, this.isEmail]],
            password: ['', Validators.required]
        });
    }
    
    private isEmail(control: FormControl): {[s: string]: boolean}{
        if(!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"))
            return {invalidMail: true};
    }
}