import { ChangeDetectionStrategy, Component, HostListener, Inject } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('enterLeaveNav', [
      state('true', style({width: '100%', 'padding-right': '6rem'})),
      transition(':enter', [
        style({width: '0', 'padding-right': 0}),
        animate('0.75s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s 200ms ease-out', style({width: '0', 'padding-right': 0}))
      ])
    ]),
    trigger('headerAnimate', [
      state('true', style({transform: 'translateY(0)'})),
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('0.3s 50ms ease')
      ]),
      transition(':leave', [
        animate('0.2s 250ms ease-out', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  scrollState = true;
  scrollValue: number;
  isNavOpened = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  @HostListener('window:scroll')
  onWindowScroll() {
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

  emitNav() {
    this.toggleNav();
    this.isNavOpened ? this.document.body.classList.add('overflow-hidden') : this.document.body.classList.remove('overflow-hidden');
  }

  toggleNav() {
    this.isNavOpened = !this.isNavOpened;
  }

}
