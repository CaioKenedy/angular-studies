import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent implements OnInit, OnChanges, OnDestroy {
  horario = new Date();
  timer: any = null!;

  @Input() texto = '';

  ngOnInit(): void {
    console.log('Evento OnInit disparou');
    this.timer = setInterval(() => (this.horario = new Date()), 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
