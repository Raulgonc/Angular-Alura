import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento {
  pensamento = '';
  autoria = '';
  modelo = 'modelo1';

  salvar() {
    console.log({ pensamento: this.pensamento, autoria: this.autoria, modelo: this.modelo });
  }
}
