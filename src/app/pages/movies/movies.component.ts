import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  pelis: Movie[] = [];
  buscarValor: string | null = null;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getPagedMovies(1);
  }

  getPagedMovies(page: number, buscarLlave?: string) {
    this.moviesService.buscarMovies(page, buscarLlave).subscribe((pelis) => {
      this.pelis = pelis;
    });
  }
  paginar(event: any) {
    const numeroPagina = event.page + 1;
    if (this.buscarValor) {
      this.getPagedMovies(numeroPagina, this.buscarValor);
    } else {
      this.getPagedMovies(numeroPagina);
    }
  }

  buscarCambiado() {
    if (this.buscarValor) {
      this.getPagedMovies(1, this.buscarValor);
    }
  }
}
