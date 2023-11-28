import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasComponent } from './repas.component';

describe('RepasComponent', () => {
  let component: RepasComponent;
  let fixture: ComponentFixture<RepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
