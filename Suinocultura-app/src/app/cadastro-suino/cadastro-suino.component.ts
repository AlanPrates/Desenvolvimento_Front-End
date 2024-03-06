import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-suino',
  templateUrl: './cadastro-suino.component.html',
  styleUrls: ['./cadastro-suino.component.css']
})
export class CadastroSuinoComponent implements OnInit {
  suinoForm!: FormGroup; // Definindo como definitivamente atribuída

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.suinoForm = this.formBuilder.group({
      brincoAnimal: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      brincoPai: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      brincoMae: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      dataNascimento: ['', Validators.required],
      dataSaida: ['', Validators.required],
      status: ['', Validators.required],
      sexo: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.suinoForm.valid) {
      // Lógica para enviar os dados do formulário para o backend
      console.log(this.suinoForm.value);
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
