import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css'],
})
export class CustomComponentComponent {
  @Input() nome = '';
  @Input() sobrenome = '';
}
