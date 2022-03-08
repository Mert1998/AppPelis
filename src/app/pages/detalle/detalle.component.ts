import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { MoviesComponent } from '../movies/movies.component';
import { IMAGES_SIZE } from '../../Constants/size.images';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  detalle: Movie | null = null;
  imagenesSizes = IMAGES_SIZE;

  constructor(private ruta: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.ruta.params.subscribe(({ id }) => {
      this.getDetalle(id);
    });
  }

  getDetalle(id: string) {
    this.moviesService.getDetalle(id).subscribe((detalleData) => {
      this.detalle = detalleData;
      console.log(this.detalle);
    });
  }
}
