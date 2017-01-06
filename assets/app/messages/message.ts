export class Message{
    content: string;
    userName: string;
    messageId: string;
    userId: string;

    //shortcut is with public keyword
    constructor(content: string, messageId?: string, userName?: string, userId?: string){
        this.content = content;
        this.messageId = messageId;
        this.userName = userName;
        this.userId = userId;
    }
}