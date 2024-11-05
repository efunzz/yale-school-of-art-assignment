import { Component, Input } from '@angular/core';
import { EventrowComponent } from '../eventrow/eventrow.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [EventrowComponent, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  @Input() events: any[] = [];
}
