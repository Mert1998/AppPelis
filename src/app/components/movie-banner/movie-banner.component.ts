import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'movie-banner',
  templateUrl: './movie-banner.component.html',
  styleUrls: ['./movie-banner.component.scss']
})
export class MovieBannerComponent {
  @Input() peliculas: Movie[] = [];
  @Input() titulo: string = '';
}
