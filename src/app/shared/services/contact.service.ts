import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {
  private contact: Contact;

  constructor() {
    this.contact = new Contact();
   }

  public getData(): Contact {
    if(!this.contact){
      this.contact = new Contact();
    }
    return this.contact;
  }

}
