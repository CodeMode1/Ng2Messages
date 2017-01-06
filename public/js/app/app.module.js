"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var core_2 = require('@angular/core');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var message_component_1 = require('./messages/message.component');
var message_list_component_1 = require('./messages/message-list.component');
var message_input_component_1 = require('./messages/message-input.component');
var message_service_1 = require('./messages/message.service');
var messages_component_1 = require('./messages/messages.component');
var authentification_component_1 = require('./auth/authentification.component');
var header_component_1 = require('./header.component');
var logout_component_1 = require('./auth/logout.component');
var signin_component_1 = require('./auth/signin.component');
var signup_component_1 = require('./auth/signup.component');
var auth_service_1 = require('./auth/auth.service');
//errors
var error_component_1 = require('./errors/error.component');
var error_service_1 = require('./errors/error.service');
//routing
var app_routes_1 = require('./app.routes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, message_component_1.MessageComponent, message_list_component_1.MessageListComponent,
                message_input_component_1.MessageInputComponent, authentification_component_1.AuthentificationComponent, messages_component_1.MessagesComponent,
                header_component_1.HeaderComponent, logout_component_1.LogoutComponent, signin_component_1.SignInComponent, signup_component_1.SignUpComponent, error_component_1.ErrorComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, app_routes_1.routing, http_1.HttpModule],
            bootstrap: [app_component_1.AppComponent],
            providers: [message_service_1.MessageService, core_2.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), auth_service_1.AuthService, error_service_1.ErrorService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxpQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLDhCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELGtDQUFpQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2hFLHVDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3pFLHdDQUFzQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQzNFLGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELG1DQUFrQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ2xFLDJDQUEwQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQzlFLGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBRXJELGlDQUFnQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzFELGlDQUFnQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzFELGlDQUFnQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzFELDZCQUE0QixxQkFBcUIsQ0FBQyxDQUFBO0FBRWxELFFBQVE7QUFDUixnQ0FBK0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMxRCw4QkFBNkIsd0JBQXdCLENBQUMsQ0FBQTtBQUV0RCxTQUFTO0FBQ1QsMkJBQXdCLGNBQWMsQ0FBQyxDQUFBO0FBVXZDO0lBQUE7SUFBd0IsQ0FBQztJQVJ6QjtRQUFDLGVBQVEsQ0FBQztZQUNWLFlBQVksRUFBRSxDQUFDLDRCQUFZLEVBQUUsb0NBQWdCLEVBQUUsNkNBQW9CO2dCQUM5RCwrQ0FBcUIsRUFBRSxzREFBeUIsRUFBRSxzQ0FBaUI7Z0JBQ25FLGtDQUFlLEVBQUUsa0NBQWUsRUFBRSxrQ0FBZSxFQUFFLGtDQUFlLEVBQUUsZ0NBQWMsQ0FBQztZQUN4RixPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLG1CQUFXLEVBQUUsMkJBQW1CLEVBQUUsb0JBQU8sRUFBRSxpQkFBVSxDQUFDO1lBQy9FLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQW9CLEVBQUMsQ0FBQyxFQUFFLDBCQUFXLEVBQUUsNEJBQVksQ0FBQztTQUNsSCxDQUFDOztpQkFBQTtJQUNzQixnQkFBQztBQUFELENBQXhCLEFBQXlCLElBQUE7QUFBWixpQkFBUyxZQUFHLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IHByb3ZpZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lc3NhZ2VMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVzc2FnZUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNZXNzYWdlc0NvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0aGVudGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9hdXRoZW50aWZpY2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvbG9nb3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpZ25JbkNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9zaWduaW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2lnblVwQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL3NpZ251cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5cclxuLy9lcnJvcnNcclxuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Vycm9ycy9lcnJvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcclxuXHJcbi8vcm91dGluZ1xyXG5pbXBvcnQgeyByb3V0aW5nIH0gZnJvbSAnLi9hcHAucm91dGVzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbmRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudCwgTWVzc2FnZUNvbXBvbmVudCwgTWVzc2FnZUxpc3RDb21wb25lbnQsXHJcbiAgICAgTWVzc2FnZUlucHV0Q29tcG9uZW50LCBBdXRoZW50aWZpY2F0aW9uQ29tcG9uZW50LCBNZXNzYWdlc0NvbXBvbmVudCwgXHJcbiAgICAgSGVhZGVyQ29tcG9uZW50LCBMb2dvdXRDb21wb25lbnQsIFNpZ25JbkNvbXBvbmVudCwgU2lnblVwQ29tcG9uZW50LCBFcnJvckNvbXBvbmVudF0sXHJcbmltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgcm91dGluZywgSHR0cE1vZHVsZV0sXHJcbmJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbnByb3ZpZGVyczogW01lc3NhZ2VTZXJ2aWNlLCBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9KSwgQXV0aFNlcnZpY2UsIEVycm9yU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
