import { Component, OnInit } from '@angular/core';
import { UiGlobalService } from './../ui-global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  constructor(public uiService: UiGlobalService) { }

  ngOnInit() {
  }
  toggleModal() {
    this.uiService.toggleModal();
  }
}
