import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarySpineComponent } from './vary-spine.component';

describe('VarySpineComponent', () => {
  let component: VarySpineComponent;
  let fixture: ComponentFixture<VarySpineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarySpineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarySpineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
