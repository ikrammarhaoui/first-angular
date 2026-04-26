import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireContact } from './formulaire-contact';

describe('FormulaireContact', () => {
  let component: FormulaireContact;
  let fixture: ComponentFixture<FormulaireContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
