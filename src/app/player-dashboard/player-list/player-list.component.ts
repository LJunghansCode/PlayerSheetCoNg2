import { Component, OnInit } from '@angular/core';
import { Player } from './../../../models/player';
import { Observable } from 'rxjs/Observable';
import { PlayerService } from './../../services/player/player.service';
import { LoginService } from './../../services/login/login.service';
import { PlayerCardComponent } from './player-card/player-card.component';
import { fadeInAnimation } from './../../_animations/fadeAnim';
import { slideLeftAnimation } from './../../_animations/slideBotAnim';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.sass'],
  animations: [fadeInAnimation, slideLeftAnimation],
})
export class PlayerListComponent implements OnInit {
  players: Player[];
  currentUser: boolean;
  constructor(private playerService: PlayerService, private loginService: LoginService) {
  }

  ngOnInit() {
       this.loginService._currentUser
       .subscribe(
         (currentUser) => {
           if (currentUser !== undefined) {
             this.currentUser = true;
             this.playerService.getPlayersForUser();
             this.subToPlayers();
           }
         }, (error) => {
           this.currentUser = false;
         }, () => {   }
       );

  }
  subToPlayers() {
                 this.playerService._playersArray.subscribe(
          (players) => {
            if (players) {
              this.players = players;
            }
          }, (error) => {
            console.error(error);
          });
  }
}
