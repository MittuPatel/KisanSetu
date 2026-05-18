import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SelectModule, Select } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-news',
  imports: [ FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
SelectModule,
    RadioButtonModule],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News {




}
