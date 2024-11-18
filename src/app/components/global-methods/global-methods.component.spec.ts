import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalMethodsComponent } from './global-methods.component';

describe('GlobalMethodsComponent', () => {
  let component: GlobalMethodsComponent;
  let fixture: ComponentFixture<GlobalMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalMethodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
