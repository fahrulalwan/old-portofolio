import { Component, HostListener, Inject, OnInit } from '@angular/core';
import * as sal from 'sal.js';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from './window-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fahrulalwan';
  transparent = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window) {
  }

  ngOnInit(): void {
    sal({
      once: false
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const num = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (num > 299) {
      this.transparent = true;
    } else if (this.transparent && num < 20) {
      this.transparent = false;
    }
    console.log(num);
  }
}
