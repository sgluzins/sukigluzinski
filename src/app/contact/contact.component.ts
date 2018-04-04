import { Component, OnInit, Input, trigger, state, transition, style, animate } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, Validators } from '@angular/forms';
import { ContactService } from '../shared/services/contact.service';
import { Contact } from '../shared/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('toggleState', [
      state('true', style({ opacity: '0', transform: 'rotateY( -180deg )'})),
      state('false', style({backgroundColor: 'white'})),
      transition('* => *', animate('300ms'))
    ])
  ]
})
export class ContactComponent implements OnInit {
  @Input() shouldToggle = false;
  contactEmail = new Contact;
  email = new FormControl('', [Validators.required, Validators.email]);
  sentMessage = `Thank you for your e-mail! I will be in touch.`;

  constructor(private contact:ContactService){

  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Please enter an email address' : this.email.hasError('email') ? 'Not a valid email address' : '';
  }

  sendEmail() {
    if(this.email.valid){
      this.shouldToggle = true;
      // add in functionality to send request for email
      console.log(this.contactEmail);
    }
  }

}
