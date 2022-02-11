import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProfissaoService {
  public loading = false

  constructor(
    private http: HttpClient
  ) { }

  public listAll(): Observable<any> {
    return this.http.get(`${env.base_url}/profissoes`)
  }

}
