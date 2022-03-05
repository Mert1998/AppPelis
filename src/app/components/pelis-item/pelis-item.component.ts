import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGENES_SIZE } from '../../Constantes/size.imagenes';
@Component({
  selector: 'pelis-item',
  templateUrl: './pelis-item.component.html',
  styleUrls: ['./pelis-item.component.scss']
})
export class PelisItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;

  sizeImagenes = IMAGENES_SIZE;

  constructor() {}

  ngOnInit(): void {}
}
