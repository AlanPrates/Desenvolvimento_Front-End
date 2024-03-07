import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    CadastroSuinoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CadastroSuinoComponent
  ]
})
export class CadastroSuinoModuleTest { }
