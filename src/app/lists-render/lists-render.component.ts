import { Component, OnInit } from '@angular/core';
import { celular } from '../types/celular';

@Component({
  selector: 'app-lists-render',
  templateUrl: './lists-render.component.html',
  styleUrls: ['./lists-render.component.css'],
})
export class ListsRenderComponent {
  celulares: celular[] = [
    {
      id: 1,
      nome: 'Celular XL',
      descricao: 'Um celular top de linha',
      esgotado: false,
    },
    {
      id: 2,
      nome: 'Celular 13 PRO',
      esgotado: true,
    },
    {
      id: 3,
      nome: 'Celular 8S',
      descricao: 'Um celular médio',
      esgotado: false,
    },
  ];
}
