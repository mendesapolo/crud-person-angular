import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaCreateOrUpdateComponent } from './pessoa-create-or-update.component';

describe('PessoaCreateOrUpdateComponent', () => {
  let component: PessoaCreateOrUpdateComponent;
  let fixture: ComponentFixture<PessoaCreateOrUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaCreateOrUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
