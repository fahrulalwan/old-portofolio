import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { Observable } from 'rxjs';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { faMediumM } from '@fortawesome/free-brands-svg-icons/faMediumM';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  faBars = faBars;
  faLinkedIn = faLinkedinIn;
  faInstagram = faInstagram;
  faEmail = faEnvelope;
  faMedium = faMediumM;
  page: Observable<string>;

  constructor() {
  }

  ngOnInit(): void {
  }
}
