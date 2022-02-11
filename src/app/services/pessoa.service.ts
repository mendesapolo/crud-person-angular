import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment as env } from '../../environments/environment'
import { Observable } from 'rxjs/internal/Observable';
import { Pagination } from '../models/Pagination';
import { map } from 'rxjs';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  public loading = false

  constructor(
    private http: HttpClient
  ) { }

  public listAll(pagination?: Pagination): Observable<any> {
    var params = new HttpParams()
    params = params.append('page', pagination?.page || '')
      .append('perPage', pagination?.perPage || '')

    return this.http.get(`${env.base_url}/pessoas`, { params })
  }

  public getPessoa(id: number): Observable<any> {
    return this.http.get(`${env.base_url}/pessoas/${id}`).pipe(map(res => res['data']))
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${env.base_url}/pessoas/${id}`)
  }

  public createOrUpdate(pessoa: Pessoa): Observable<any> {
    if (!pessoa.id || pessoa.id <= 0) {
      return this.http.post(`${env.base_url}/pessoas`, {
        nome: pessoa.nome,
        telefone: pessoa.telefone,
        email: pessoa.email,
        profissao_id: pessoa.profissao.id,
      })
    } else {
      return this.http.put(`${env.base_url}/pessoas/${pessoa.id}`, {
        nome: pessoa.nome,
        telefone: pessoa.telefone,
        email: pessoa.email,
        profissao_id: pessoa.profissao.id,
      })
    }
  }

}
