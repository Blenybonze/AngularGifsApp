import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historico: string[] = [];

  get historial() {
    return [...this._historico];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();

    if (!this._historico.includes(query) && query !== '') {
      this._historico.unshift(query);
      this._historico = this._historico.splice(0, 10);
      console.log(this._historico)
    }
  }

}
