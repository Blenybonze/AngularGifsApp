import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  //variáveis de requisição para a API
  private _apiKey: string = 'sE6ZsekbKxVf8d96U41gL9xOnWtGr9OK';
  private _servicoUrl: string = 'https://api.giphy.com/v1/gifs';
  private _returnQuantity: string = '10';

  //variáveis gerais do serviço
  private _historico: string[] = [];
  public resultados: Gif[] = [];
  get historico() {
    return [...this._historico];
  }

  constructor(private http: HttpClient) {
    this._historico = JSON.parse(localStorage.getItem('historico')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('ultimaBusca')!) || [];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();

    if (!this._historico.includes(query) && query !== '') {
      this._historico.unshift(query);
      this._historico = this._historico.splice(0, 10);

      localStorage.setItem('historico', JSON.stringify(this._historico));
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this._servicoUrl}/search`, { params })
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('ultimaBusca', JSON.stringify(this.resultados));
      })
  }

}
