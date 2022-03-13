import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private maileService : MailerService){}
    

    async sendUserConfirmation(){
        await this.maileService.sendMail({
            to : 'wissemanaya1@gmail.com',
            subject:"welcom" ,
            text : "test",
            template: '.templates/confirmation' 

        });
    }
}
