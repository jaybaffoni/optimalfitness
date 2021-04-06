import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public rgba = `rgba(0, 0, 0, 0)`;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const opacity = Math.min(1.0, (window.pageYOffset / 200));
    this.rgba = `rgba(0, 0, 0, ` + opacity + `)`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
