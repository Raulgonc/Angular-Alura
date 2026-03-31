import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentosService } from '../pensamentos';

@Component({
  selector: 'app-meu-mural',
  imports: [],
  templateUrl: './meu-mural.html',
  styleUrl: './meu-mural.css',
})
export class MeuMural implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentosService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().subscribe(lista => this.listaPensamentos = lista);
  }

  navegarParaCriar() {
    this.router.navigate(['/criar-pensamento']);
  }

  editar(id: number) {
    this.router.navigate(['/editar-pensamento', id]);
  }

  excluir(id: number) {
    this.service.excluir(id).subscribe(() => {
      this.listaPensamentos = this.listaPensamentos.filter(p => p.id !== id);
    });
  }

  tamanhoCard(conteudo: string): string {
    if (conteudo.length > 150) return 'largo';
    if (conteudo.length > 80) return 'medio';
    return 'pequeno';
  }
}
