import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.css'],
})
export class FatherComponentComponent {
  sobrenome = 'da Silva';

  mostrarNomeCompleto(nomeCompleto: any) {
    alert(`O nome completo é: ${nomeCompleto}`);
  }
}
