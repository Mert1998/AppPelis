import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelisItemComponent } from './pelis-item.component';

describe('PelisItemComponent', () => {
  let component: PelisItemComponent;
  let fixture: ComponentFixture<PelisItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelisItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelisItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
