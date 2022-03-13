import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';

@Module({
   imports : [
     MailerModule.forRoot({
       transport : {
         host : 'smtp-relay.sendinblue.com' ,
         secure : false ,
         auth : {
           user : 'wissem.an@pepolls.com',
           pass: 'hjSWtd3J7NZFkCLq' ,
         
         },
       },
       defaults :{
         from : '"No Reply" <wissem.an@pepolls.com>',
       },
       template: {
        dir: join(__dirname , 'templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
       },
     }),
   ],
   controllers :  [MailController] ,
   providers : [MailService] ,
   exports : [MailService],



})
export class MailModule {} 
