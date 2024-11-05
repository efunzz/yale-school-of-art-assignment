import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutusComponent } from '../../components/aboutus/aboutus.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ExhibitionComponent } from '../../components/exhibition/exhibition.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutusComponent,
    FooterComponent,
    ExhibitionComponent,
    CalendarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  exhibitions = [
    {
      imageUrl: 'exhibition-1.png',
      title: 'Exhibition Title 1',
      description: 'Brief description of Exhibition 1.',
    },
    {
      imageUrl: 'exhibition-2.jpeg',
      title: 'Exhibition Title 2',
      description: 'Brief description of Exhibition 2.',
    },
    {
      imageUrl: 'exhibition-3.jpeg',
      title: 'Exhibition Title 3',
      description: 'Brief description of Exhibition 3.',
    },
    {
      imageUrl: 'exhibition-4.jpeg',
      title: 'Exhibition Title 4',
      description: 'Brief description of Exhibition 4.',
    },
  ];
  events = [
    {
      date: '16',
      month: 'NOV',
      imageSrc: 'event-poster-1.jpeg',
      title: 'Exhibition Title 1',
      description:
        'A brief description of Exhibition 1 showcasing art and creativity.',
    },
    {
      date: '22',
      month: 'NOV',
      imageSrc: 'event-poster-2.jpeg',
      title: 'Exhibition Title 2',
      description:
        'Discover modern art pieces and installations in this engaging event.',
    },
    {
      date: '30',
      month: 'NOV',
      imageSrc: 'event-poster-3.jpeg',
      title: 'Exhibition Title 3',
      description:
        'Explore a diverse range of artistic expressions and creative works.',
    },
  ];
}
