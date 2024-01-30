import { Component } from '@angular/core';
import { VersusComponent } from '../../../widgets/versus/versus.component';
import { VersusSlotComponent } from '../../../widgets/versus-slot/versus-slot.component';

@Component({
  selector: 'app-versus-section',
  standalone: true,
  imports: [VersusComponent , VersusSlotComponent],
  templateUrl: './versus-section.component.html',
  styleUrl: './versus-section.component.scss'
})
export class VersusSectionComponent {

}
