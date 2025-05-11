import { CommonModule } from '@angular/common';
import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar-mb',
    imports: [RouterLink, RouterLinkActive,CommonModule],
    templateUrl: './navbar-mb.component.html',
    styleUrls: [
        './navbar-mb.component.css',
        '../../../assets/css/general.css',
        '../../../assets/css/header.css',
    ],
     encapsulation: ViewEncapsulation.None,
})
export class NavbarMbComponent{
     isSidenavOpen = false;
    servicesListOpen = false;
    aboutUsListOpen = true;
  constructor(private renderer: Renderer2) {}
 toggleSidenav(open: boolean) {
    this.isSidenavOpen = open;

    const body = document.getElementById('body');
    if (body) {
      if (open) {
        this.renderer.setStyle(body, 'overflow', 'hidden');
      } else {
        this.renderer.setStyle(body, 'overflow', 'auto');
      }
    }
  }
  closeSidenav(){
    this.isSidenavOpen = false;
    const body = document.getElementById('body');
    this.renderer.setStyle(body, 'overflow', 'auto');
  }
  toggleServicesList() {
    this.servicesListOpen = !this.servicesListOpen;
  }
  toggleAboutUsList() {
    this.aboutUsListOpen = !this.aboutUsListOpen;
  }
}
