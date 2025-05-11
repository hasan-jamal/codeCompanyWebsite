import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { NavbarDesComponent } from "./shared/navbar-des/navbar-des.component";
import { NavbarMbComponent } from "./shared/navbar-mb/navbar-mb.component";
import { FooterComponent } from "./shared/footer/footer.component";

import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarDesComponent, NavbarMbComponent, FooterComponent],
  templateUrl: './app.component.html',
   encapsulation: ViewEncapsulation.None,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit  {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.init();
    }
    setTimeout(() => {
      const appRoot = document.querySelector('app-root') as HTMLElement;
      const splashScreen = document.querySelector('#splash-screen') as HTMLElement;
      appRoot.style.display = 'block';
      splashScreen.style.display = 'none';
      console.log(appRoot.style.visibility)
    }, 10000);
  }
  title = 'code-website';
}
