import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlayerService } from './../player.service';
import { LoginService } from './../login.service';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.sass']
})
export class PlayerDashboardComponent implements OnInit {

  constructor(private loginService: LoginService, private playerService: PlayerService) { }

  ngOnInit() {
  }

}
