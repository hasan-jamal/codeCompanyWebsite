import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar-des',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-des.component.html',
  styleUrls: [
     './navbar-des.component.css',
    '../../../assets/css/general.css',
    '../../../assets/css/header.css',
  ],
})
export class NavbarDesComponent {

}
