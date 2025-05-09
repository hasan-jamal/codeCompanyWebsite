import { Component, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-navbar-mb',
    imports: [],
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
  toggleServicesList() {
    this.servicesListOpen = !this.servicesListOpen;
  }
}
