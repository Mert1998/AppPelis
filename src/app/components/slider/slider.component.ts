import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZE } from '../../Constants/size.images';
import { Movie } from '../../models/movie';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')])
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() peliculas: Movie[] = [];
  @Input() isBanner: boolean = false;

  currentSlideIndex: number = 0;

  readonly sizeImagenes = IMAGES_SIZE;

  constructor() {}

  ngOnInit(): void {
    if (!this.isBanner) {
      this.currentSlideIndex;
    }
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.peliculas.length;
    }, 3000);
  }
}
