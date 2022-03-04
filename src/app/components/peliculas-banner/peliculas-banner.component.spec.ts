import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasBannerComponent } from './peliculas-banner.component';

describe('PeliculasBannerComponent', () => {
  let component: PeliculasBannerComponent;
  let fixture: ComponentFixture<PeliculasBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
