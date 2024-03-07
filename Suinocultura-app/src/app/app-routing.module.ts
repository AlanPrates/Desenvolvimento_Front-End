import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { ListaSuinosComponent } from './lista-suinos/lista-suinos.component';
import { ControlePesoComponent } from './controle-peso/controle-peso.component';
import { CadastroPesoComponent } from './cadastro-peso/cadastro-peso.component';

const routes: Routes = [
  { path: 'cadastro-suino', component: CadastroSuinoComponent },
  { path: 'listagem-suinos', component: ListaSuinosComponent },
  { path: 'controle-peso', component: ControlePesoComponent },
  { path: 'cadastro-peso', component: CadastroPesoComponent},
  { path: '', redirectTo: '/listagem-suinos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
