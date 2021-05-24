import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaryAboutComponent } from './vary-about.component';

describe('VaryAboutComponent', () => {
  let component: VaryAboutComponent;
  let fixture: ComponentFixture<VaryAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaryAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaryAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
