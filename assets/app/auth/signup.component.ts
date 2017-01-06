import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from './user';
import { AuthService } from './auth.service';
import { ErrorService } from '../errors/error.service';

@Component({
    moduleId: module.id,
    selector: 'my-signup',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
               <div class="form-group">
                   <label for="firstName">FirstName</label>
                   <input type="text" id="firstName" class="form-control" formControlName="firstName">
               </div>
                <div class="form-group">
                   <label for="lastName">LastName</label>
                   <input type="text" id="lastName" class="form-control" formControlName="lastName">
               </div>
                <div class="form-group">
                   <label for="email">Email</label>
                   <input type="email" id="email" class="form-control" formControlName="email">
               </div>
                <div class="form-group">
                   <label for="password">Password</label>
                   <input type="password" id="password" class="form-control" formControlName="password">
               </div>
               <button type="submit" class="btn btn-primary" [disabled]="!signupForm.valid">Sign Up</button>
            </form>
        </section>
    `
})
export class SignUpComponent implements OnInit {
    signupForm: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService, private errorService:ErrorService) { }

    onSubmit(){
        console.log(this.signupForm.value);
        const user = new User(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.firstName, this.signupForm.value.lastName);
        console.log('signup up:'+ user.firstName + user.lastName);
        this.authService.signUp(user)
            .subscribe(
                data => console.log(data),
                error => this.errorService.handleError(error)
            );
    }

    //ou Validators.pattern (pour le email)
    ngOnInit() { 
        this.signupForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, this.isEmail]],
            password: ['', Validators.required]
        });
    }

    private isEmail(control: FormControl): {[s: string]: boolean}{
        if(!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"))
            return {invalidMail: true};
    }
}