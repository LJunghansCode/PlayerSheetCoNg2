import { Component, OnInit } from '@angular/core';
import { UiGlobalService } from './../ui-global.service';
import { slideRightAnimation} from './../_animations/slideRightAnim';
import { slideTopAnimation } from './../_animations/slideTopAnim';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [slideRightAnimation, slideTopAnimation]
})
export class HomeComponent implements OnInit {
  constructor(public uiService: UiGlobalService) { }

  ngOnInit() {
  }
  toggleModal() {
    this.uiService.toggleModal();
  }
}
