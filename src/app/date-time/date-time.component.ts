import { Component, ChangeDetectionStrategy, OnInit  } from '@angular/core';

@Component({
  selector: 'app-date-time',
  standalone: true,
  imports: [],
  templateUrl: './date-time.component.html',
  styleUrl: './date-time.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DateTimeComponent implements OnInit {
   currentDate = new Date();
   
   year = this.currentDate.getFullYear();
   month = this.currentDate.getMonth() + 1;
   day = this.currentDate.getDate();
   hours = this.currentDate.getHours();
   minutes = this.currentDate.getMinutes();
   seconds = this.currentDate.getSeconds();
   formattedDate = `${this.year}-${this.month}-${this.day} ${this.hours}:${this.minutes}`;
   ngOnInit(): void {}
   
}


