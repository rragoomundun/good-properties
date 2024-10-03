import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSelectMultipleComponent } from './autocomplete-select-multiple.component';

describe('AutocompleteSelectMultipleComponent', () => {
  let component: AutocompleteSelectMultipleComponent;
  let fixture: ComponentFixture<AutocompleteSelectMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteSelectMultipleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutocompleteSelectMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
