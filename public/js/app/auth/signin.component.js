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
var forms_1 = require('@angular/forms');
var user_1 = require('./user');
var auth_service_1 = require('./auth.service');
var router_1 = require('@angular/router');
var error_service_1 = require('../errors/error.service');
var SignInComponent = (function () {
    function SignInComponent(fb, authService, router, errorService) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.errorService = errorService;
    }
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.signinForm.value);
        var user = new user_1.User(this.signinForm.value.email, this.signinForm.value.password);
        console.log('sign in' + user.email + user.password);
        this.authService.signIn(user)
            .subscribe(function (data) {
            //he we store the token client side in local storage (html5 concept) to store in the browser
            // will be accessible in all the app
            //storing the user 
            localStorage.setItem('token', data.token);
            //storing the user's id , to identify if a message was written by a certain user
            //stores the id of the currently logged user, so that in front end we can disable buttons for unauthorized users
            localStorage.setItem('userId', data.userId);
            //to get to the root route (index route)
            _this.router.navigateByUrl('/');
        }, function (error) { return _this.errorService.handleError(error); });
    };
    //ou Validators.pattern (pour le email)
    SignInComponent.prototype.ngOnInit = function () {
        this.signinForm = this.fb.group({
            email: ['', [forms_1.Validators.required, this.isEmail]],
            password: ['', forms_1.Validators.required]
        });
    };
    SignInComponent.prototype.isEmail = function (control) {
        if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"))
            return { invalidMail: true };
    };
    SignInComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-signin',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signinForm.valid\">Sign In</button>\n            </form>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, router_1.Router, error_service_1.ErrorService])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pGLHFCQUFxQixRQUFRLENBQUMsQ0FBQTtBQUM5Qiw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQXFCdkQ7SUFHSSx5QkFBb0IsRUFBZSxFQUFVLFdBQXdCLEVBQVUsTUFBYyxFQUFVLFlBQXlCO1FBQTVHLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFJLENBQUM7SUFFckksa0NBQVEsR0FBUjtRQUFBLGlCQW1CQztRQWxCRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25GLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUN4QixTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsNEZBQTRGO1lBQzVGLG9DQUFvQztZQUNwQyxtQkFBbUI7WUFDbkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLGdGQUFnRjtZQUNoRixnSEFBZ0g7WUFDaEgsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLHdDQUF3QztZQUN4QyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBcEMsQ0FBb0MsQ0FDaEQsQ0FBQztJQUNWLENBQUM7SUFFRCx1Q0FBdUM7SUFDdkMsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDNUIsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8saUNBQU8sR0FBZixVQUFnQixPQUFvQjtRQUNoQyxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHVJQUF1SSxDQUFDLENBQUM7WUFDN0osTUFBTSxDQUFDLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQ25DLENBQUM7SUF4REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxnd0JBY1Q7U0FDSixDQUFDOzt1QkFBQTtJQXVDRixzQkFBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksdUJBQWUsa0JBc0MzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktc2lnbmluJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzaWduaW5Gb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIXNpZ25pbkZvcm0udmFsaWRcIj5TaWduIEluPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduSW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc2lnbmluRm9ybTogRm9ybUdyb3VwO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZXJyb3JTZXJ2aWNlOkVycm9yU2VydmljZSkgeyB9XHJcbiAgICBcclxuICAgIG9uU3VibWl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaWduaW5Gb3JtLnZhbHVlKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIodGhpcy5zaWduaW5Gb3JtLnZhbHVlLmVtYWlsLCB0aGlzLnNpZ25pbkZvcm0udmFsdWUucGFzc3dvcmQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaWduIGluJyArIHVzZXIuZW1haWwgKyB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25Jbih1c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9oZSB3ZSBzdG9yZSB0aGUgdG9rZW4gY2xpZW50IHNpZGUgaW4gbG9jYWwgc3RvcmFnZSAoaHRtbDUgY29uY2VwdCkgdG8gc3RvcmUgaW4gdGhlIGJyb3dzZXJcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWxsIGJlIGFjY2Vzc2libGUgaW4gYWxsIHRoZSBhcHBcclxuICAgICAgICAgICAgICAgICAgICAvL3N0b3JpbmcgdGhlIHVzZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9zdG9yaW5nIHRoZSB1c2VyJ3MgaWQgLCB0byBpZGVudGlmeSBpZiBhIG1lc3NhZ2Ugd2FzIHdyaXR0ZW4gYnkgYSBjZXJ0YWluIHVzZXJcclxuICAgICAgICAgICAgICAgICAgICAvL3N0b3JlcyB0aGUgaWQgb2YgdGhlIGN1cnJlbnRseSBsb2dnZWQgdXNlciwgc28gdGhhdCBpbiBmcm9udCBlbmQgd2UgY2FuIGRpc2FibGUgYnV0dG9ucyBmb3IgdW5hdXRob3JpemVkIHVzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIGRhdGEudXNlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RvIGdldCB0byB0aGUgcm9vdCByb3V0ZSAoaW5kZXggcm91dGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL291IFZhbGlkYXRvcnMucGF0dGVybiAocG91ciBsZSBlbWFpbClcclxuICAgIG5nT25Jbml0KCkgeyBcclxuICAgICAgICB0aGlzLnNpZ25pbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuaXNFbWFpbF1dLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIGlzRW1haWwoY29udHJvbDogRm9ybUNvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59e1xyXG4gICAgICAgIGlmKCFjb250cm9sLnZhbHVlLm1hdGNoKFwiW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XCIpKVxyXG4gICAgICAgICAgICByZXR1cm4ge2ludmFsaWRNYWlsOiB0cnVlfTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
