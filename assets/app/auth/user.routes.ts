import { RouterConfig, Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './signup.component';
import { SignInComponent } from './signin.component';
import { LogoutComponent } from './logout.component';

export const USER_ROUTES: RouterConfig = [
    { path: '', component: SignUpComponent },
    {path: 'signup', component: SignUpComponent},
    {path: 'signin', component: SignInComponent},
    {path: 'logout', component: LogoutComponent}
];
