import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profissao } from 'src/app/models/Profissao';
import { ProfissaoService } from 'src/app/services/profissao.service';
import { Pessoa } from '../../models/pessoa';
import { ToastrService } from 'ngx-toastr';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-pessoa-create-or-update',
  templateUrl: './pessoa-create-or-update.component.html',
  styleUrls: ['./pessoa-create-or-update.component.css']
})
export class PessoaCreateOrUpdateComponent implements OnInit, OnChanges {

  @Input('target') modalName: string = 'modal-confimar'
  @Input() title: string = 'Confimar acção'
  @Input() pessoa: Pessoa = new Pessoa()
  @Output('event') event: EventEmitter<any> = new EventEmitter()

  public pessoaForm: FormGroup
  public profissoes: Profissao[] = []

  constructor(
    public formBuilder: FormBuilder,
    public profissaoService: ProfissaoService,
    public pessoaService: PessoaService,
    public toast: ToastrService
  ) {
    this.pessoaForm = this.formBuilder.group({
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null, Validators.email],
      profissao_id: [null, Validators.required],
    })
  }


  ngOnInit(): void {
    this.getProfissoes()
    this.setForm()
    this.pessoaForm.controls['profissao_id'].setValue(this.pessoa.profissao?.id || 0)
  }

  public setForm() {
    this.pessoaForm.setValue({
      nome: this.pessoa?.nome || null,
      telefone: this.pessoa?.telefone || null,
      email: this.pessoa?.email || null,
      profissao_id: this.pessoa?.profissao?.id || 0,
    })
  }

  public getProfissoes() {
    this.profissaoService.loading = true
    this.profissaoService.listAll().subscribe(res => {
      this.profissoes = res.data as Profissao[]
      this.profissaoService.loading = false
    })
  }

  public onSubmit(form) {
    this.pessoa.id = this.pessoa.id
    this.pessoa.nome = form.nome
    this.pessoa.telefone = form.telefone
    this.pessoa.email = form.email
    this.pessoa.profissao.id = form.profissao_id

    this.pessoaService.loading = true
    this.pessoaService.createOrUpdate(this.pessoa).subscribe(res => {
      this.event.emit()
      this.toast.success(`${res.message}`, 'Sucesso')
      this.pessoaForm.reset()
      this.pessoaService.loading = false
    })
  }

  ngOnChanges() {
    this.setForm()
  }

}
