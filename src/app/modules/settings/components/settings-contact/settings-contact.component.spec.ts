import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsContactComponent } from './settings-contact.component';

describe('SettingsContactComponent', () => {
  let component: SettingsContactComponent;
  let fixture: ComponentFixture<SettingsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
