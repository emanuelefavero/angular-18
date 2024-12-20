import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalStateComponent } from './global-state.component';

describe('GlobalStateComponent', () => {
  let component: GlobalStateComponent;
  let fixture: ComponentFixture<GlobalStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
