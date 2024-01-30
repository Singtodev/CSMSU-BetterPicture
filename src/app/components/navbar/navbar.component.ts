import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public pages: any[] = [
    {
      path: "home",
      name_th: "หน้าแรก"
    },
    {
      path: "rank",
      name_th: "อันดับ"
    },
    {
      path: "terms",
      name_th: "เงื่อนไขการใช้งาน"
    },
    {
      path: "about",
      name_th: "เกี่ยวกับเรา"
    },
  ];

  public activeIndex: number = -1;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.findActiveIndex();
  }

  public findActiveIndex() {
    this.activeIndex = this.pages.findIndex((item) => {
      return (this.router.url === "/" && item.path === "home") || ("/" + item.path) === this.router.url;
    });
  }

  public goToPage(pageName: string) {
    this.router.navigate(['/' + pageName]);
  }

}
