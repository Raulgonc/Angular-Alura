import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PensamentosService } from '../pensamentos';

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

  constructor(private service: PensamentosService, private router: Router) {}

  salvar() {
    this.service.adicionar({ conteudo: this.pensamento, autoria: this.autoria, modelo: this.modelo });
    this.router.navigate(['/meu-mural']);
  }

  cancelar() {
    this.router.navigate(['/meu-mural']);
  }
}
