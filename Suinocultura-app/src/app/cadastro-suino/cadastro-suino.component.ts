import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-suino',
  templateUrl: './cadastro-suino.component.html',
  styleUrls: ['./cadastro-suino.component.css']
})
export class CadastroSuinoComponent implements OnInit {
  suinoForm!: FormGroup;
  suinos: any[] = [];

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

    // Recuperar os dados salvos no localStorage ao inicializar o componente
    const savedSuinos = localStorage.getItem('suinos');
    if (savedSuinos) {
      this.suinos = JSON.parse(savedSuinos);
    }
  }

  onSubmit() {
    if (this.suinoForm.valid) {
      // Adicionar o novo suíno à lista de suínos
      this.suinos.push(this.suinoForm.value);

      // Salvar a lista atualizada no localStorage
      localStorage.setItem('suinos', JSON.stringify(this.suinos));

      // Limpar o formulário após o envio
      this.suinoForm.reset();
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
