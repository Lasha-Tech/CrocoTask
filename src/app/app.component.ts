import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DateTimeComponent } from './date-time/date-time.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DateTimeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
  title = 'Crocotask';
}

