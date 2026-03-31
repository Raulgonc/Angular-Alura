import { Routes } from '@angular/router';
import { MeuMural } from './components/pensamentos/meu-mural/meu-mural';
import { CriarPensamento } from './components/pensamentos/criar-pensamento/criar-pensamento';
import { EditarPensamento } from './components/pensamentos/editar-pensamento/editar-pensamento';

export const routes: Routes = [
  { path: '', redirectTo: 'meu-mural', pathMatch: 'full' },
  { path: 'meu-mural', component: MeuMural },
  { path: 'criar-pensamento', component: CriarPensamento },
  { path: 'editar-pensamento/:id', component: EditarPensamento },
];
