import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
})
export class SecondComponentComponent {
  name = 'Caio';
  birthDate = '1996-03-27';
  urlImage = '/assets/caio.jpeg';

  showBirthDate() {
    alert(`A data de nascimento do Caio é: ${this.birthDate}`);
  }
}
