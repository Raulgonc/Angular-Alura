import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentosService } from '../pensamentos';

@Component({
  selector: 'app-editar-pensamento',
  imports: [FormsModule],
  templateUrl: './editar-pensamento.html',
  styleUrls: ['./editar-pensamento.css', '../criar-pensamento/criar-pensamento.css'],
})
export class EditarPensamento implements OnInit {
  pensamento: Pensamento = { conteudo: '', autoria: '', modelo: 'modelo1' };

  constructor(
    private service: PensamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.buscarPorId(id).subscribe(p => this.pensamento = { ...p });
  }

  salvar() {
    this.service.atualizar(this.pensamento)
      .subscribe(() => this.router.navigate(['/meu-mural']));
  }

  cancelar() {
    this.router.navigate(['/meu-mural']);
  }
}
