import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-column-panel',
  templateUrl: './two-column-panel.component.html',
  styleUrls: ['./two-column-panel.component.scss']
})
export class TwoColumnPanelComponent implements OnInit {

  @Input() title : string;
  @Input() subtitle : string;
  @Input() button1 : string;
  @Input() button2 : string;
  @Input() imgUrl : string;
  @Input() imgLeft : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
