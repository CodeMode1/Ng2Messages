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
var message_service_1 = require('./message.service');
var error_service_1 = require('../errors/error.service');
var MessageListComponent = (function () {
    //@Input() customMessage: Message;
    /*
    messages: Message[] = [
        new Message('A new message', null, 'Max'),
        new Message('Another message', null, 'Anna')
    ];
    */
    function MessageListComponent(messageService, errorService) {
        this.messageService = messageService;
        this.errorService = errorService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (messages) {
            _this.messages = messages;
            _this.messageService.messages = messages;
        }, function (error) { return _this.errorService.handleError(error); });
    };
    MessageListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message-list',
            template: "\n    <section class=\"col-md-8 col-md-offset-2\">\n        <my-message *ngFor=\"let message of messages\" [message]=\"message\" (editClicked)=\"message.content = $event\"></my-message>\n    </section>\n    "
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, error_service_1.ErrorService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUVwRSxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQVd2RDtJQUVJLGtDQUFrQztJQUVsQzs7Ozs7TUFLRTtJQUNGLDhCQUFvQixjQUE4QixFQUFVLFlBQXlCO1FBQWpFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUksQ0FBQztJQUUxRix1Q0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRTthQUM1QixTQUFTLENBQ04sVUFBQSxRQUFRO1lBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzVDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFwQyxDQUFvQyxDQUNoRCxDQUFDO0lBQ1YsQ0FBQztJQTlCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsaU5BSVQ7U0FDSixDQUFDOzs0QkFBQTtJQTZCRiwyQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlksNEJBQW9CLHVCQTRCaEMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgICAgICA8bXktbWVzc2FnZSAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiIFttZXNzYWdlXT1cIm1lc3NhZ2VcIiAoZWRpdENsaWNrZWQpPVwibWVzc2FnZS5jb250ZW50ID0gJGV2ZW50XCI+PC9teS1tZXNzYWdlPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBtZXNzYWdlczogTWVzc2FnZVtdO1xyXG4gICAgLy9ASW5wdXQoKSBjdXN0b21NZXNzYWdlOiBNZXNzYWdlO1xyXG5cclxuICAgIC8qXHJcbiAgICBtZXNzYWdlczogTWVzc2FnZVtdID0gW1xyXG4gICAgICAgIG5ldyBNZXNzYWdlKCdBIG5ldyBtZXNzYWdlJywgbnVsbCwgJ01heCcpLFxyXG4gICAgICAgIG5ldyBNZXNzYWdlKCdBbm90aGVyIG1lc3NhZ2UnLCBudWxsLCAnQW5uYScpXHJcbiAgICBdO1xyXG4gICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLCBwcml2YXRlIGVycm9yU2VydmljZTpFcnJvclNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyBcclxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbWVzc2FnZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuLypcclxuICAgIG5nT25DaGFuZ2VzKCl7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHRoaXMuY3VzdG9tTWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICAqL1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
