import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListarComponent } from './pages/pessoa-listar/pessoa-listar.component';
import { PessoaShowComponent } from './pages/pessoa-show/pessoa-show.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoas', pathMatch: 'full' },
  { path: 'pessoas', component: PessoaListarComponent },
  { path: 'pessoas/:id', component: PessoaShowComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
