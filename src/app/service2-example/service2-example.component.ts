import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-service2-example',
  templateUrl: './service2-example.component.html',
  styleUrls: ['./service2-example.component.css'],
})
export class Service2ExampleComponent {
  descricao = '';

  constructor(public logger: LoggerService) {}

  adicionarProduto() {
    this.logger.logar(
      `O produto com a descrição ${this.descricao} foi adicionado`
    );
  }
}
