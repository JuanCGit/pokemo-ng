import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionListPageComponent } from './expansion-list-page.component';

describe('ExpansionListPageComponent', () => {
  let component: ExpansionListPageComponent;
  let fixture: ComponentFixture<ExpansionListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpansionListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
