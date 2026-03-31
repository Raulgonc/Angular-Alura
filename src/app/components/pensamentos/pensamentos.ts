import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento';

const STORAGE_KEY = 'pensamentos';

const DEFAULT: Pensamento[] = [
  { id: 1, conteudo: 'A vida é aquilo que acontece enquanto você está ocupado fazendo outros planos.', autoria: 'John Lennon', modelo: 'modelo1' },
  { id: 2, conteudo: 'Seja a mudança que você quer ver no mundo.', autoria: 'Mahatma Gandhi', modelo: 'modelo2' },
  { id: 3, conteudo: 'A imaginação é mais importante que o conhecimento.', autoria: 'Albert Einstein', modelo: 'modelo3' },
];

@Injectable({
  providedIn: 'root',
})
export class PensamentosService {
  private lista: Pensamento[] = this.carregar();

  private carregar(): Pensamento[] {
    const salvo = localStorage.getItem(STORAGE_KEY);
    return salvo ? JSON.parse(salvo) : DEFAULT;
  }

  private salvar(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lista));
  }

  listar(): Pensamento[] {
    return this.lista;
  }

  adicionar(pensamento: Pensamento): void {
    this.lista.push({ ...pensamento, id: Date.now() });
    this.salvar();
  }

  buscarPorId(id: number): Pensamento | undefined {
    return this.lista.find(p => p.id === id);
  }

  atualizar(pensamento: Pensamento): void {
    const index = this.lista.findIndex(p => p.id === pensamento.id);
    if (index !== -1) this.lista[index] = pensamento;
    this.salvar();
  }

  excluir(id: number): void {
    this.lista = this.lista.filter(p => p.id !== id);
    this.salvar();
  }
}
