import { RouterConfig, RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { AuthentificationComponent } from './auth/authentification.component';
import { USER_ROUTES } from './auth/user.routes';

const routes: RouterConfig = ([
    {path: '', component: MessagesComponent},
    {path: 'auth', component: AuthentificationComponent, children: USER_ROUTES}
]);

export const routing = RouterModule.forRoot(routes);