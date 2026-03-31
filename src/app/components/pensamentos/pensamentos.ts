import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento';

const STORAGE_KEY = 'pensamentos';

const DEFAULT: Pensamento[] = [
  { id: 1, conteudo: 'A vida é aquilo que acontece enquanto você está ocupado fazendo outros planos.', autoria: 'John Lennon', modelo: 'modelo1' },
  { id: 2, conteudo: 'Seja a mudança que você quer ver no mundo.', autoria: 'Mahatma Gandhi', modelo: 'modelo2' },
  { id: 3, conteudo: 'A imaginação é mais importante que o conhecimento.', autoria: 'Albert Einstein', modelo: 'modelo3' },
  { id: 4, conteudo: 'Sem música, a vida seria um erro. O alemão imagina até Deus cantando canções.', autoria: 'Friedrich Nietzsche', modelo: 'modelo1' },
  { id: 5, conteudo: 'Aquilo que não me destrói me fortalece.', autoria: 'Friedrich Nietzsche', modelo: 'modelo2' },
  { id: 6, conteudo: 'Para suportar a existência, os gregos precisaram criar os deuses olímpicos. Nós criamos o niilismo.', autoria: 'Friedrich Nietzsche', modelo: 'modelo3' },
  { id: 7, conteudo: 'Só sei que nada sei, e pelo simples fato de saber isso, já sei mais do que aqueles que acreditam saber tudo.', autoria: 'Sócrates', modelo: 'modelo1' },
  { id: 8, conteudo: 'Uma vida sem reflexão não vale a pena ser vivida.', autoria: 'Sócrates', modelo: 'modelo2' },
  { id: 9, conteudo: 'Conhece-te a ti mesmo.', autoria: 'Sócrates', modelo: 'modelo3' },
  { id: 10, conteudo: 'O homem é a medida de todas as coisas: das que são, enquanto são; das que não são, enquanto não são.', autoria: 'Protágoras', modelo: 'modelo1' },
  { id: 11, conteudo: 'Ninguém entra duas vezes no mesmo rio, pois quando nele se entra novamente, não se encontra as mesmas águas, e o próprio ser já se transformou.', autoria: 'Heráclito', modelo: 'modelo2' },
  { id: 12, conteudo: 'A felicidade é o sentido e o propósito da vida, o objetivo e o fim da existência humana.', autoria: 'Aristóteles', modelo: 'modelo3' },
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
