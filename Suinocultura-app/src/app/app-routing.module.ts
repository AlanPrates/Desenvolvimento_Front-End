import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { ListaSuinosComponent } from './lista-suinos/lista-suinos.component';


const routes: Routes = [
  { path: 'cadastro-suino', component: CadastroSuinoComponent },
  { path: 'listagem-suinos', component: ListaSuinosComponent },
  { path: '', redirectTo: '/listagem-suinos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
