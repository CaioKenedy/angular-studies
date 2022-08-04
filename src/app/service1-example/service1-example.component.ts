import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-service1-example',
  templateUrl: './service1-example.component.html',
  styleUrls: ['./service1-example.component.css'],
})
export class Service1ExampleComponent {
  nome = '';

  constructor(private logger: LoggerService) {}

  adicionarNome() {
    this.logger.logar(`O nome ${this.nome} foi adicionado`);
  }
}
