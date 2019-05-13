import { Component, OnInit } from '@angular/core';
import * as sal from 'sal.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fahrulalwan';

  constructor() {
  }

  ngOnInit(): void {
    sal();
  }
}
