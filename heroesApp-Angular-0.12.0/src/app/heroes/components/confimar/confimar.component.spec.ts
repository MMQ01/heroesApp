import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimarComponent } from './confimar.component';

describe('ConfimarComponent', () => {
  let component: ConfimarComponent;
  let fixture: ComponentFixture<ConfimarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfimarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfimarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
