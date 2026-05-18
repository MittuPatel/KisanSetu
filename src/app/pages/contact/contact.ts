import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
// import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-contact',
  imports: [ FormsModule, InputTextModule, ButtonModule, CardModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {


  name = '';
  email = '';
  phone = '';
  subject = '';
  message = '';

  submitForm() {

    console.log({
      name: this.name,
      email: this.email,
      phone: this.phone,
      subject: this.subject,
      message: this.message
    });

    alert('Message sent successfully!');
  }




}
