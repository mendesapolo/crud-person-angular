import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaListarComponent } from './pages/pessoa-listar/pessoa-listar.component';
import { PessoaShowComponent } from './pages/pessoa-show/pessoa-show.component';
import { ModalConfirmarComponent } from './components/modal-confirmar/modal-confirmar.component';
import { ToastrModule } from 'ngx-toastr';
import { PessoaCreateOrUpdateComponent } from './components/pessoa-create-or-update/pessoa-create-or-update.component';


@NgModule({
  declarations: [
    AppComponent,
    PessoaListarComponent,
    PessoaShowComponent,
    ModalConfirmarComponent,
    PessoaCreateOrUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
