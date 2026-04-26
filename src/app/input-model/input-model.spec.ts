import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputModel } from './input-model';

describe('InputModel', () => {
  let component: InputModel;
  let fixture: ComponentFixture<InputModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
