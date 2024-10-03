import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMinMaxComponent } from './input-min-max.component';

describe('InputMinMaxComponent', () => {
  let component: InputMinMaxComponent;
  let fixture: ComponentFixture<InputMinMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputMinMaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMinMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
