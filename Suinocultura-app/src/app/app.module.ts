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

@NgModule({
  declarations: [
    AppComponent,
    CadastroSuinoComponent,
    ListaSuinosComponent,
    FilterSuinosPipe,
    ControlePesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LineChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
