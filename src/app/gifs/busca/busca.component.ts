import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar() {
    console.log(this.txtBuscar.nativeElement.value)

    this.txtBuscar.nativeElement.value = '';
  }
}
