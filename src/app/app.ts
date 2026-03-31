import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { CriarPensamento } from './components/pensamentos/criar-pensamento/criar-pensamento';
import { MeuMural } from './components/pensamentos/meu-mural/meu-mural';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, CriarPensamento, MeuMural],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-alura');
}
