import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controle-peso',
  templateUrl: './controle-peso.component.html',
  styleUrls: ['./controle-peso.component.css']
})
export class ControlePesoComponent implements OnInit {

  // Dados de exemplo para o gráfico (datas e pesos)
  dadosGrafico = [
    { data: '2024-01-01', peso: 100 },
    { data: '2024-01-15', peso: 98 },
    { data: '2024-02-01', peso: 95 },
    { data: '2024-02-15', peso: 92 },
    // Adicione mais dados conforme necessário
  ];

  constructor() { }

  ngOnInit(): void {
    // Lógica de inicialização do componente
  }

}
