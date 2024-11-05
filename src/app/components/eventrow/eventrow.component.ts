import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eventrow',
  standalone: true,
  imports: [],
  templateUrl: './eventrow.component.html',
  styleUrl: './eventrow.component.css',
})
export class EventrowComponent {
  @Input() event: any;
}
