import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa } from '../../models/pessoa';

@Component({
  selector: 'app-pessoa-show',
  templateUrl: './pessoa-show.component.html',
  styleUrls: ['./pessoa-show.component.css']
})
export class PessoaShowComponent implements OnInit {

  public pessoa: Pessoa = new Pessoa()

  constructor(
    public pessoaService: PessoaService,
    private routeActive: ActivatedRoute,
    private route: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    const id = this.routeActive.snapshot.paramMap.get('id')
    this.getPessoa(window.atob(decodeURI(id || '')))
  }

  public getPessoa(id) {
    this.pessoaService.loading = true
    this.pessoaService.getPessoa(id).subscribe(data => {
      this.pessoa = data as Pessoa
      this.pessoaService.loading = false
    })
  }

  public deletar(id: number) {
    this.pessoaService.delete(id).subscribe(res => {
      this.toast.info(res.message, 'Eliminado')
      this.route.navigate(['pessoas'])
    })
  }

}
