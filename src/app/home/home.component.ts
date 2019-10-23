import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { map } from 'rxjs/operators';
import { faAngular } from '@fortawesome/free-brands-svg-icons/faAngular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  faAngular = faAngular;

  constructor(private route: ActivatedRoute, private app: AppComponent) {
    this.app.page = this.route.data.pipe(map(data => data.route));
  }

  ngOnInit(): void {
  }

}
