import { Component, OnInit } from '@angular/core';
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
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit  {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.init();
    }
  }
  title = 'code-website';
}
