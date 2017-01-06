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
var message_1 = require('./message');
var message_service_1 = require('./message.service');
var error_service_1 = require('../errors/error.service');
var auth_service_1 = require('../auth/auth.service');
var MessageInputComponent = (function () {
    //@Output() customContent = new EventEmitter<Message>();
    function MessageInputComponent(messageService, errorService, authService) {
        this.messageService = messageService;
        this.errorService = errorService;
        this.authService = authService;
        this.messageEdit = null;
        this.isEdit = false;
    }
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.isMessageEdit.subscribe(function (message) {
            //setting a reference
            _this.messageEdit = message;
            /*
            console.log('message Edit' + this.messageEdit.content + this.messageEdit.messageId + this.messageEdit.userId + this.messageEdit.userName);
            console.log('message ' + message.content + message.messageId + message.userId + message.userName);
            */
            _this.isEdit = true;
        }, function (error) { return console.log(error); });
    };
    MessageInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.isEdit) {
            // Edit >> LIVE UPDATE in the browser not the db
            this.messageEdit.content = form.content;
            this.messageService.updateMessage(this.messageEdit)
                .subscribe(function (data) { return console.log(data); }, function (error) { return _this.errorService.handleError(error); });
            // CLEAR INPUT BOX :not overiding the message object but only the reference (the property messageEdit)
            // to a new object 
            //no more message in the input but the service still contains the original message used by the list 
            this.messageEdit = null;
        }
        else {
            var message = new message_1.Message(form.content, null, 'Dummy');
            console.log(message);
            this.messageService.addMessage(message)
                .subscribe(function (data) {
                console.log(data);
                _this.messageService.messages.push(data);
            }, function (error) { return _this.errorService.handleError(error); });
        }
    };
    MessageInputComponent.prototype.onCancel = function () {
        this.messageEdit = null;
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message-input',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n                <div class=\"form-group\">\n                    <label for=\"content\">Content</label>\n                    <input ngModel name=\"content\" type=\"text\" class=\"form-control\" id=\"content\" #input [ngModel]=\"messageEdit?.content\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Send Message</button>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!isEdit\">Save</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\" *ngIf=\"isEdit\">Cancel</button> \n            </form>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, error_service_1.ErrorService, auth_service_1.AuthService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUUsZUFBZSxDQUFDLENBQUE7QUFDbkYsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELDZCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBdUJuRDtJQUlJLHdEQUF3RDtJQUV4RCwrQkFBb0IsY0FBOEIsRUFBVSxZQUF5QixFQUFVLFdBQXdCO1FBQW5HLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFMdkgsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsV0FBTSxHQUFZLEtBQUssQ0FBQztJQUltRyxDQUFDO0lBRTVILHdDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDdkMsVUFBQSxPQUFPO1lBQ0gscUJBQXFCO1lBQ3JCLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1lBQzNCOzs7Y0FHRTtZQUNGLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUM7SUFDTixDQUFDO0lBRUQsd0NBQVEsR0FBUixVQUFTLElBQVM7UUFBbEIsaUJBeUJDO1FBeEJHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLGdEQUFnRDtZQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7aUJBQzlDLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXBDLENBQW9DLENBQ2hELENBQUM7WUFDTixzR0FBc0c7WUFDdEcsbUJBQW1CO1lBQ25CLG9HQUFvRztZQUNwRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFNLE9BQU8sR0FBWSxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7aUJBQ2xDLFNBQVMsQ0FDTixVQUFBLElBQUk7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDZCxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXBDLENBQW9DLENBQ2hELENBQUM7UUFDVixDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBekVMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxreEJBWVQ7U0FLSixDQUFDOzs2QkFBQTtJQWlFRiw0QkFBQztBQUFELENBaEVBLEFBZ0VDLElBQUE7QUFoRVksNkJBQXFCLHdCQWdFakMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vbWVzc2FnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZS1pbnB1dCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KGYudmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb250ZW50XCI+Q29udGVudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5nTW9kZWwgbmFtZT1cImNvbnRlbnRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb250ZW50XCIgI2lucHV0IFtuZ01vZGVsXT1cIm1lc3NhZ2VFZGl0Py5jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFmLnZhbGlkXCI+U2VuZCBNZXNzYWdlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFtkaXNhYmxlZF09XCIhaXNFZGl0XCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJvbkNhbmNlbCgpXCIgKm5nSWY9XCJpc0VkaXRcIj5DYW5jZWw8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICBgXHJcbiAgICAvKlxyXG4gICAgKiAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIWYudmFsaWRcIj57eyAhbWVzc2FnZUVkaXQgPyAnU2VuZCBNZXNzYWdlJyA6ICdTYXZlIE1lc3NhZ2UnIH19PC9idXR0b24+IFxyXG4gICAgKiA8YnV0dG9uIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJvbkNhbmNlbCgpXCIgKm5nSWY9XCJtZXNzYWdlRWRpdFwiPkNhbmNlbDwvYnV0dG9uPiBcclxuICAgICovXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBtZXNzYWdlRWRpdDogTWVzc2FnZSA9IG51bGw7XHJcbiAgICBpc0VkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvL0BPdXRwdXQoKSBjdXN0b21Db250ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxNZXNzYWdlPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLCBwcml2YXRlIGVycm9yU2VydmljZTpFcnJvclNlcnZpY2UsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuaXNNZXNzYWdlRWRpdC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9zZXR0aW5nIGEgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VFZGl0ID0gbWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWVzc2FnZSBFZGl0JyArIHRoaXMubWVzc2FnZUVkaXQuY29udGVudCArIHRoaXMubWVzc2FnZUVkaXQubWVzc2FnZUlkICsgdGhpcy5tZXNzYWdlRWRpdC51c2VySWQgKyB0aGlzLm1lc3NhZ2VFZGl0LnVzZXJOYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlICcgKyBtZXNzYWdlLmNvbnRlbnQgKyBtZXNzYWdlLm1lc3NhZ2VJZCArIG1lc3NhZ2UudXNlcklkICsgbWVzc2FnZS51c2VyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0VkaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGZvcm06IGFueSkgeyBcclxuICAgICAgICBpZih0aGlzLmlzRWRpdCl7XHJcbiAgICAgICAgLy8gRWRpdCA+PiBMSVZFIFVQREFURSBpbiB0aGUgYnJvd3NlciBub3QgdGhlIGRiXHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUVkaXQuY29udGVudCA9IGZvcm0uY29udGVudDtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS51cGRhdGVNZXNzYWdlKHRoaXMubWVzc2FnZUVkaXQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyBDTEVBUiBJTlBVVCBCT1ggOm5vdCBvdmVyaWRpbmcgdGhlIG1lc3NhZ2Ugb2JqZWN0IGJ1dCBvbmx5IHRoZSByZWZlcmVuY2UgKHRoZSBwcm9wZXJ0eSBtZXNzYWdlRWRpdClcclxuICAgICAgICAgICAgLy8gdG8gYSBuZXcgb2JqZWN0IFxyXG4gICAgICAgICAgICAvL25vIG1vcmUgbWVzc2FnZSBpbiB0aGUgaW5wdXQgYnV0IHRoZSBzZXJ2aWNlIHN0aWxsIGNvbnRhaW5zIHRoZSBvcmlnaW5hbCBtZXNzYWdlIHVzZWQgYnkgdGhlIGxpc3QgXHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUVkaXQgPSBudWxsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoZm9ybS5jb250ZW50LCBudWxsLCAnRHVtbXknKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkTWVzc2FnZShtZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNhbmNlbCgpe1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUVkaXQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuIFxyXG4vKlxyXG4gICAgb25DcmVhdGUoY29udGVudDogc3RyaW5nKXtcclxuICAgICAgICAoY2xpY2spPVwib25DcmVhdGUoaW5wdXQudmFsdWUpXCJcclxuICAgICAgICBjb25zdCBtZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoY29udGVudCwgbnVsbCwgJ0R1bW15Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgICAgIC8vdGhpcy5jdXN0b21Db250ZW50LmVtaXQobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICAqL1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
