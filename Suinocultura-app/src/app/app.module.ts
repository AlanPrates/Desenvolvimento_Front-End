import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { ListaSuinosComponent } from './lista-suinos/lista-suinos.component';
import { FilterSuinosPipe } from './lista-suinos/filter-suinos.pipe';
import { FormsModule } from '@angular/forms';
import { ControlePesoComponent } from './controle-peso/controle-peso.component';
import { LineChartModule } from "@swimlane/ngx-charts";
import { CadastroPesoComponent } from './cadastro-peso/cadastro-peso.component';
import { EdicaoPesoComponent } from './edicao-peso/edicao-peso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CadastroSuinoComponent,
    ListaSuinosComponent,
    FilterSuinosPipe,
    ControlePesoComponent,
    CadastroPesoComponent,
    EdicaoPesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LineChartModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
