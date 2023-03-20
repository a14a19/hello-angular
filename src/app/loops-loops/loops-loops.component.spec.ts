import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopsLoopsComponent } from './loops-loops.component';

describe('LoopsLoopsComponent', () => {
  let component: LoopsLoopsComponent;
  let fixture: ComponentFixture<LoopsLoopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopsLoopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopsLoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
