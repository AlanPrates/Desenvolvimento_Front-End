import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PesoService } from '../peso.service';

@Component({
  selector: 'app-cadastro-peso',
  templateUrl: './cadastro-peso.component.html',
  styleUrls: ['./cadastro-peso.component.css']
})
export class CadastroPesoComponent implements OnInit {
  cadastroForm: FormGroup = new FormGroup({}); // Inicialização no construtor

  constructor(private formBuilder: FormBuilder, private pesoService: PesoService) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      brinco: ['', Validators.required],
      dataPesagem: ['', Validators.required],
      peso: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      this.pesoService.cadastrarPeso(this.cadastroForm.value).subscribe(
        // Lógica de resposta do serviço
      );
    }
  }
}
