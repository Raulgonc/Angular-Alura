import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(
    private service: PensamentosService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: lista => {
        this.listaPensamentos = [...lista];
        this.cdr.detectChanges();
      },
      error: err => console.error('Erro ao carregar pensamentos:', err)
    });
  }

  navegarParaCriar() {
    this.router.navigate(['/criar-pensamento']);
  }

  editar(id: number | string) {
    this.router.navigate(['/editar-pensamento', id]);
  }

  excluir(id: number | string) {
    this.service.excluir(id).subscribe(() => {
      this.listaPensamentos = this.listaPensamentos.filter(p => p.id !== id);
      this.cdr.detectChanges();
    });
  }

  tamanhoCard(conteudo: string): string {
    if (conteudo.length > 150) return 'largo';
    if (conteudo.length > 80) return 'medio';
    return 'pequeno';
  }
}
