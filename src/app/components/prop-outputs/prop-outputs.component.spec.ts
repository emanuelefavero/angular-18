import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropOutputsComponent } from './prop-outputs.component';

describe('PropOutputsComponent', () => {
  let component: PropOutputsComponent;
  let fixture: ComponentFixture<PropOutputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropOutputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropOutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
