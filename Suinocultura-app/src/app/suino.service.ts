import { Injectable } from '@angular/core';
import { Suino } from './suino.model';

@Injectable({
  providedIn: 'root'
})
export class SuinoService {
  private suinos: Suino[] = [];

  constructor() { }

  getSuinos(): Suino[] {
    // Lógica para obter os suínos do backend ou de qualquer outra fonte de dados
    return this.suinos;
  }

  // Outros métodos de CRUD podem ser adicionados conforme necessário
}
