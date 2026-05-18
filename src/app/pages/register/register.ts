import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Card, CardModule } from 'primeng/card';
import { SelectModule, Select } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';


@Component({
  selector: 'app-register',
  imports: [Card, PasswordModule, SelectModule, FormsModule, ButtonModule, RadioButtonModule, CardModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {


// form fields
  market = '';
  hearAbout = '';
  phone: string = '';
  email = '';
  password = '';
  userType = 'customer';

  // dropdown options
  markets = [
    { label: 'Kunpur Markrt', value: 'kunpur' },
    { label: 'Mehsana Market', value: 'mehsana' },
    { label: 'Delhi Market', value: 'delhi' },
    { label: 'Delhi Market', value: 'delhi' },
    { label: 'Mumbai Market', value: 'mumbai' },
    { label: 'Bangalore Market', value: 'bangalore' }
  ];

  hearOptions = [
    { label: 'Google Search', value: 'google' },
    { label: 'Social Media', value: 'social' },
     { label: 'Friend/ Colleague', value: 'friend' },
    { label: 'Blog or Publication', value: 'blog' },
    { label: 'Flyer', value: 'flyer' },
    { label: 'Other', value: 'other' },
  ];

  register() {
    console.log({
      market: this.market,
      hearAbout: this.hearAbout,
      phone: this.phone,
      email: this.email,
      password: this.password,
      userType: this.userType
    });
  }



}
