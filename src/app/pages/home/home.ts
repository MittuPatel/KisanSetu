import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-home',
  imports: [ButtonModule, CardModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  products = [
    { name: 'Organic Wheat', price: '₹40/kg' },
    { name: 'Fresh Tomatoes', price: '₹25/kg' },
    { name: 'Basmati Rice', price: '₹90/kg' }
  ];
}
