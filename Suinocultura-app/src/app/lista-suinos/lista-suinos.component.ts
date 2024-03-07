import { Component, OnInit } from '@angular/core';
import { Suino } from '../suino.model';
import { SuinoService } from '../suino.service';

@Component({
  selector: 'app-lista-suinos',
  templateUrl: './lista-suinos.component.html',
  styleUrls: ['./lista-suinos.component.css']
})
export class ListaSuinosComponent implements OnInit {
  suinos: Suino[] = [];
  filtroBrincoPai: string = '';

  constructor(private suinoService: SuinoService) { }

  ngOnInit(): void {
    this.suinos = this.suinoService.getSuinos();
  }

  calcularIdade(dataNascimento: Date): string {
    // Lógica para calcular a idade em meses
    // Implemente conforme necessário
    return '';
  }

  editarSuino(suino: Suino) {
    // Lógica para editar suíno
  }

  deletarSuino(suino: Suino) {
    // Remove o suíno do array suinos
    const index = this.suinos.indexOf(suino);
    if (index !== -1) {
      this.suinos.splice(index, 1);
      // Atualiza os suínos no localStorage
      localStorage.setItem('suinos', JSON.stringify(this.suinos));
    }
  }
}
