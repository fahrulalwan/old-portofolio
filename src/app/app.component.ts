import { Component, HostListener, OnInit } from '@angular/core';
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
    trigger('enterLeave', [
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

  scrollState = true;
  scrollValue: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    // console.table([window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop]);
    const position = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (position <= 100) {
      this.scrollState = true;
    } else if (position >= this.scrollValue) {
      this.scrollState = false;
    } else if (position < this.scrollValue) {
      this.scrollState = true;
    }
    this.scrollValue = position;
  }
}
