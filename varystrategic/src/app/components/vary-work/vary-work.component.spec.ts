import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaryWorkComponent } from './vary-work.component';

describe('VaryWorkComponent', () => {
  let component: VaryWorkComponent;
  let fixture: ComponentFixture<VaryWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaryWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaryWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
