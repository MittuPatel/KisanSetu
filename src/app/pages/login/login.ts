import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import { SelectModule, Select } from 'primeng/select';
import { Register } from "../register/register";
// import { DropdownModule } from 'primeng/dropdown';
// import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-login',
  imports: [FormsModule, InputTextModule, PasswordModule, ButtonModule, CardModule, Register, CheckboxModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  password: string = '';
  rememberMe: any;

constructor() {}
  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);

     if (this.rememberMe) {
      localStorage.setItem('email', this.email);
    } else {
      localStorage.removeItem('email');
    }

    // later connect to backend API
  }


}


