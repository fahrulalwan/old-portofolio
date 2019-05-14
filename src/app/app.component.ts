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
  isTransparent = false;
  whiteText = false;
  openBurger = true ;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window) {
  }

  ngOnInit(): void {
    sal({
      once: false
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const num = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (num > 299) {
      this.isTransparent = true;
    } else if (this.isTransparent && num < 25) {
      this.isTransparent = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.whiteText = event.target.innerWidth < 1280;
  }

  openMenuBurger(event: any) {
    this.isTransparent = !this.isTransparent;
    this.openBurger = !this.openBurger;
  }
}
