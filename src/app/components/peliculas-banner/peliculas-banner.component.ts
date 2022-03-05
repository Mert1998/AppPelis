import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'peliculas-banner',
  templateUrl: './peliculas-banner.component.html',
  styleUrls: ['./peliculas-banner.component.scss']
})
export class PeliculasBannerComponent {
  @Input() peliculas: Movie[] = [];
  @Input() titulo: string = '';
}
