import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ExhibitionComponent } from '../../components/exhibition/exhibition.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ExhibitionComponent],
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
}
