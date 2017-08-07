import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../player.service';
import { Player } from './../../../models/player';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.sass']
})
export class PlayerInfoComponent implements OnInit {
  player: Player;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService._playerSingle
      .subscribe(player => {
          this.player = player;
      }, (error) => {
        console.error(error);
      },
      () => {
        // got player
      });
  }
  update() {
    console.log(this.player)
    this.playerService.updateCurrentPlayer(this.player);
  }

}
