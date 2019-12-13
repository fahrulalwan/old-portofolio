import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  jit: true,
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  scrollState = true;
  scrollValue: number;
  isNavOpened = false;

  constructor() { }

  ngOnInit() {
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
