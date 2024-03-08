import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-suinos',
  templateUrl: './lista-suinos.component.html',
  styleUrls: ['./lista-suinos.component.css']
})
export class ListaSuinosComponent implements OnInit {
  suinos: any[] = [];
  suinoSelecionado: any = null;
  filtroBrincoPai: string = '';
  userData: any;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
      } else {
        this.router.navigate(['/login']);
      }
    });

    const suinosRef = this.db.list('suinos');
    suinosRef.snapshotChanges().subscribe((suinos: any[]) => {
      this.suinos = suinos.map((suino: any) => {
        return { id: suino.payload.key, ...suino.payload.val() };
      });
    });
  }

  editarSuino(suino: any) {
    this.suinoSelecionado = { ...suino };
  }

  salvarEdicao() {
    const suinoRef = this.db.object(`suinos/${this.suinoSelecionado.id}`);
    suinoRef.update(this.suinoSelecionado)
      .then(() => {
        this.toastr.success('Suíno editado com sucesso!', 'Sucesso');
        this.suinoSelecionado = null;
      })
      .catch(error => {
        console.error(error);
        this.toastr.error('Ocorreu um erro ao editar o suíno.', 'Erro');
      });
  }

  cancelarEdicao() {
    this.suinoSelecionado = null;
  }

  deletarSuino(suino: any) {
    if (confirm('Tem certeza de que deseja excluir este suíno?')) {
      const suinoRef = this.db.object(`suinos/${suino.id}`);
      suinoRef.remove()
        .then(() => {
          this.toastr.success('Suíno excluído com sucesso!', 'Sucesso');
        })
        .catch(error => {
          console.error(error);
          this.toastr.error('Ocorreu um erro ao excluir o suíno.', 'Erro');
        });
    }
  }

  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }
}
