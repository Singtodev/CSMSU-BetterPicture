import { Component } from '@angular/core';
import { UpdateTimeComponent } from '../update-time/update-time.component';
import { RankTableComponent } from '../rank-table/rank-table.component';

@Component({
  selector: 'app-versus-slot',
  standalone: true,
  imports: [UpdateTimeComponent , RankTableComponent],
  templateUrl: './versus-slot.component.html',
  styleUrl: './versus-slot.component.scss'
})
export class VersusSlotComponent {

}
