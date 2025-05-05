import { Component, input } from '@angular/core';

@Component({
  selector: 'app-servcies-page',
  imports: [],
  templateUrl: './servcies-page.component.html',
  styleUrl: './servcies-page.component.css'
})
export class ServciesPageComponent {
   serviceId= input.required<string>()
   limit= input.required<string>()
}
