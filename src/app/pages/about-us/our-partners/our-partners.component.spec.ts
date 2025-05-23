import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPartnersComponent } from './our-partners.component';

describe('OurPartnersComponent', () => {
  let component: OurPartnersComponent;
  let fixture: ComponentFixture<OurPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurPartnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
