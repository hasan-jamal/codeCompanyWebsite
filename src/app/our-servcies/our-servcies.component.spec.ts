import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServciesComponent } from './our-servcies.component';

describe('OurServciesComponent', () => {
  let component: OurServciesComponent;
  let fixture: ComponentFixture<OurServciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurServciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
