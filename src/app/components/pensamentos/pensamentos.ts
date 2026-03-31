import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root',
})
export class PensamentosService {
  private url = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.url);
  }

  adicionar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.url, pensamento);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    return this.http.get<Pensamento>(`${this.url}/${id}`);
  }

  atualizar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.put<Pensamento>(`${this.url}/${pensamento.id}`, pensamento);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
