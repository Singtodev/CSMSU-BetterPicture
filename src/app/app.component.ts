import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  public showButtonGoTop: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.showButtonGoTop = true;
    } else {
      this.showButtonGoTop = false;
    }
  }

  goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


}
