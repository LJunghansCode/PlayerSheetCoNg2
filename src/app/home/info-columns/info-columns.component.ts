import { Component, OnInit } from '@angular/core';
import { slideLeftAnimation } from './../../_animations/slideBotAnim';

@Component({
  selector: 'app-info-columns',
  templateUrl: './info-columns.component.html',
  styleUrls: ['./info-columns.component.sass'],
  animations: [slideLeftAnimation]
})
export class InfoColumnsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
