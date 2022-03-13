import { Controller, Get, Post } from "@nestjs/common";
import { MailService } from "./mail.service";

@Controller('auth')
export class MailController {
    constructor (private mailservice : MailService){}


@Get()
sendUserConfirmation(){
    this.mailservice.sendUserConfirmation()
}
}