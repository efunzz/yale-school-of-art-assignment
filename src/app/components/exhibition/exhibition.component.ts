import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exhibition',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './exhibition.component.html',
  styleUrl: './exhibition.component.css',
})
export class ExhibitionComponent {
  @Input() exhibitions: any[] = [];
}
