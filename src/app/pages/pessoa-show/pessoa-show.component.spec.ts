import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaShowComponent } from './pessoa-show.component';

describe('PessoaShowComponent', () => {
  let component: PessoaShowComponent;
  let fixture: ComponentFixture<PessoaShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
