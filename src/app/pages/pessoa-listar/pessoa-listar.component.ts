import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pagination } from '../../models/Pagination';
import { Pessoa } from '../../models/pessoa';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-pessoa-listar',
  templateUrl: './pessoa-listar.component.html',
  styleUrls: ['./pessoa-listar.component.css']
})
export class PessoaListarComponent implements OnInit {

  public pagination: Pagination = new Pagination();
  public pessoas: Pessoa[] = []

  constructor(
    public pessoaService: PessoaService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.pagination.page = 1
    this.pagination.perPage = 5

    this.listar()
  }

  public listar() {
    this.pessoaService.loading = true
    this.pessoaService.listAll(this.pagination).subscribe(res => {
      this.pessoas = res.data as Pessoa[]
      this.pagination.page = res.meta.page
      this.pagination.perPage = res.meta.per_page
      this.pagination.total = res.meta.total
      this.pessoaService.loading = false
    })
  }

  public redirectToDetail(id: number) {
    this.route.navigate(['pessoas', window.btoa(id.toString())])
  }
}
