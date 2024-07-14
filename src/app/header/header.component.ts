import { Component } from '@angular/core';
import { DateTimeComponent } from '../date-time/date-time.component';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../service/data.service';
import { Injectable, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DateTimeComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

@Injectable ({
  providedIn: 'root'
})

export class HeaderComponent {
  title = 'Crocotask';
  users: any[] = [];
  private router = inject(Router)
  constructor(private route: Router) {}
  navigateTo(route: string): void {
    this.router.navigate(['/user-table'])
  }
}
