import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigibankComponent } from './digibank.component';

describe('DigibankComponent', () => {
  let component: DigibankComponent;
  let fixture: ComponentFixture<DigibankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigibankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigibankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
