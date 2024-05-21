import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayImageComponent } from './overlay-image.component';

describe('OverlayImageComponent', () => {
  let component: OverlayImageComponent;
  let fixture: ComponentFixture<OverlayImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverlayImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
