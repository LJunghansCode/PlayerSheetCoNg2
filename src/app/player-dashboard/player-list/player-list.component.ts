import { Component, OnInit } from '@angular/core';
import { Player } from './../../../models/player';
import { Observable } from 'rxjs/Observable';
import { PlayerService } from './../../player.service';
import { LoginService } from './../../login.service';
import { PlayerCardComponent } from './player-card/player-card.component';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.sass'],
})
export class PlayerListComponent implements OnInit {
  players: any;
  currentUser: boolean;
  constructor(private playerService: PlayerService, private loginService: LoginService) {
  }

  ngOnInit() {
       this.loginService._currentUser.subscribe(
         (currentUser) => {
           if (currentUser !== undefined) {
             this.currentUser = true;
             this.playerService.getPlayersForUser();
             this.playerService._playersArray.subscribe(
          (players) => {
            if (players) {
              this.players = players;
            }
          }, (error) => {
            console.error(error);
          });
           }
         }, (error) => {
           this.currentUser = false;
         }, () => {   }
       );

  }
}
