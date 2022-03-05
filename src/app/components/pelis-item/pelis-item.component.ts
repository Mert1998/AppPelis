import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
@Component({
  selector: 'pelis-item',
  templateUrl: './pelis-item.component.html',
  styleUrls: ['./pelis-item.component.scss']
})
export class PelisItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;
  constructor() {}

  ngOnInit(): void {}
}
