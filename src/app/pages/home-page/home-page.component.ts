import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bookAppt(): void{
    const url = 'https://get.mndbdy.ly/XczjmQUke7';
    window.location.href = url;
  }


}
