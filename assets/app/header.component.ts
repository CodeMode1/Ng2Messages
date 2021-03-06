import { Component } from "@angular/core";

@Component({
    selector: 'my-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li><a [routerLink]="['']" routerLinkActive="router-link-active">Messages</a></li>
                    <li><a [routerLink]="['/auth']" routerLinkActive="router-link-active">Authentication</a></li>
                </ul>
            </nav>
        </header>
    `,
    styles: [`
        header {
            margin-bottom: 20px;
        }
    
        ul {
          text-align: center;  
        }
        
        li {
            float: none;
            display: inline-block;
        }
        
        .router-link-active {
            background-color: #337ab7;
            color: white;
        }
    `]
})
export class HeaderComponent {
    
}