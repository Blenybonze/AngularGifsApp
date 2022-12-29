import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  get historico() {
    return this.gifsService.historico;
  }

  buscar(busca: string) {
    this.gifsService.buscarGifs(busca);
  }
}
