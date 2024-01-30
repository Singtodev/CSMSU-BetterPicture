import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusSlotComponent } from './versus-slot.component';

describe('VersusSlotComponent', () => {
  let component: VersusSlotComponent;
  let fixture: ComponentFixture<VersusSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersusSlotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VersusSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
