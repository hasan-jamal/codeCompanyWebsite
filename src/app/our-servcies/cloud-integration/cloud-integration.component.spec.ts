import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudIntegrationComponent } from './cloud-integration.component';

describe('CloudIntegrationComponent', () => {
  let component: CloudIntegrationComponent;
  let fixture: ComponentFixture<CloudIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
