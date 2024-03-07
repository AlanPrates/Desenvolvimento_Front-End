import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe FormsModule aqui
import { ListaSuinosComponent } from './lista-suinos/lista-suinos.component';
import { FilterSuinosPipe } from './lista-suinos/filter-suinos.pipe';

@NgModule({
  declarations: [
    ListaSuinosComponent,
    FilterSuinosPipe
  ],
  imports: [
    CommonModule,
    FormsModule // Importe o FormsModule aqui
  ],
  exports: [
    ListaSuinosComponent,
    FilterSuinosPipe
  ]
})
export class ListaSuinosModuleTest { }
