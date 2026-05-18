import { Component } from '@angular/core';
import { Menubar } from "primeng/menubar";
import { RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-header',
  imports: [RouterLink, MenubarModule, InputTextModule, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuItems = [
      { label: 'About', link: '/about' },
      { label: 'Our Locations', link: '/locations' },
      // { label: 'FarmDrop Stories', link: '/stories' },
      // { label: 'Cooking', link: '/cooking' },
      // { label: 'News & Media', link: '/news' },
      { label: 'Login', link: '/login' }
  ];


}
