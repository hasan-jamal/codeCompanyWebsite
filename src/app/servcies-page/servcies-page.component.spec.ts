import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServciesPageComponent } from './servcies-page.component';

describe('ServciesPageComponent', () => {
  let component: ServciesPageComponent;
  let fixture: ComponentFixture<ServciesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServciesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServciesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
