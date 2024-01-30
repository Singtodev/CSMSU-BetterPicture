import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalImagesComponent } from './horizontal-images.component';

describe('HorizontalImagesComponent', () => {
  let component: HorizontalImagesComponent;
  let fixture: ComponentFixture<HorizontalImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
