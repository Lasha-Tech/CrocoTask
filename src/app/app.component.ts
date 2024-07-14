import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class AppComponent {
  title = 'Crocotask';
}

