import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferItemComponent } from './offer-item.component';

describe('OfferItemComponent', () => {
  let component: OfferItemComponent;
  let fixture: ComponentFixture<OfferItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
