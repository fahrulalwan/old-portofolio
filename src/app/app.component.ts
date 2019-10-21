import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
      })),
      state('closed', style({
        height: '150px',
        opacity: 0.5,
      })),
      transition('open => closed', [
        animate(500)
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'fahrulalwan';
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
