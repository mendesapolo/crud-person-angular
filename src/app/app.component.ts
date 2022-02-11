import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pessoa } from './models/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public pessoa: Pessoa = new Pessoa()

  constructor(
    private route: Router,
    private toast: ToastrService
  ) { }

  public gotoHome() {
    this.route.navigate(['pessoas'])
  }

  public showMsg() {
    this.toast.info('Em desenvolvimento', 'Informação')
  }
}
