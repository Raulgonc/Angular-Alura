import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento';

const STORAGE_KEY = 'pensamentos';

const DEFAULT: Pensamento[] = [
  { id: 1, conteudo: 'O homem que tem um porquê para viver pode suportar quase qualquer como. A dor faz parte da existência, e é através dela que nos tornamos o que somos. Sem sofrimento, não há grandeza possível.', autoria: 'Friedrich Nietzsche', modelo: 'modelo1' },
  { id: 2, conteudo: 'Só sei que nada sei — e é isso que me diferencia: ao menos conheço minha ignorância.', autoria: 'Sócrates', modelo: 'modelo2' },
  { id: 3, conteudo: 'O caráter é o destino do homem.', autoria: 'Heráclito', modelo: 'modelo3' },
  { id: 4, conteudo: 'A felicidade é o sentido e o propósito da vida, o objetivo e o fim da existência humana.', autoria: 'Aristóteles', modelo: 'modelo1' },
  { id: 5, conteudo: 'Penso, logo existo. Mas o que sou afinal? Uma coisa que pensa — que duvida, que afirma, que nega, que quer, que imagina e que sente. Eis tudo que posso dizer com certeza absoluta sobre mim mesmo.', autoria: 'René Descartes', modelo: 'modelo2' },
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
