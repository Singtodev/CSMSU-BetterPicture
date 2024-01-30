import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusSectionComponent } from './versus-section.component';

describe('VersusSectionComponent', () => {
  let component: VersusSectionComponent;
  let fixture: ComponentFixture<VersusSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersusSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VersusSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
