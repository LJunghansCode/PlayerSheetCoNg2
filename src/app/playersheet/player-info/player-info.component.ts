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
  basicInfo: any[];
  details: any[];
  waiting: any;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService._playerSingle
      .subscribe(
      (player) => {
        if (player) {
          this.player = player;
          this.basicInfo = this.player.masterStats.basicInformation;
          this.details = this.player.masterStats.charDetails;
        }
      }, (error) => {
        console.error(error);
      },
      () => {
        // got player
      });
  }
  update() {
    this.playerService.updateCurrentPlayer(this.player);
  }
  maybeChanging(stat) {
    stat.editing = true;
    clearTimeout(stat.waiting);
  }

  registerChangeEnter(stat) {
  if (stat.value === this.player[stat.stat]) {
    stat.editing = false;
  } else {
    stat.editing = true;
    // Store 'this' to use in timeout
    const that = this;
    stat.waiting = setTimeout(function(){
      that.playerService.updateCurrentPlayer(that.player);
      stat.editing = false;
    }, 2000);
    stat.value = this.player[stat.stat];
  }
  }
  ifEditing(stat) {
    if (stat) {
      if (stat.editing) {
        return 'is-editing';
      } else {
        return 'done-editing';
      }
    }
  }

}
