import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaryContactComponent } from './vary-contact.component';

describe('VaryContactComponent', () => {
  let component: VaryContactComponent;
  let fixture: ComponentFixture<VaryContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaryContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaryContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
