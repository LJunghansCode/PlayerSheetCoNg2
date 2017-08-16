import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../player.service';
import { FormService } from './../../form.service';
import { Player } from './../../../models/player';
import { slideLeftAnimation } from './../../_animations/slideBotAnim';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.sass'],
  animations: [slideLeftAnimation],

})
export class PlayerInfoComponent implements OnInit {
  player: Player;
  basicInfo: any[];
  details: any[];
  constructor(private playerService: PlayerService, private formService: FormService) { }

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
  // Form Logic from Service

  update() {
    this.formService.updatePlayerDbCall(this.player);
  }
  maybeChanging(stat) {
    this.formService.currentlyChanging(stat);
  }

  registerChangeEnter(stat, player) {
    this.formService.fieldChangedCallDbAfterWait(stat, player);
  }
  ifEditing(stat) {
    return this.formService.editCssToggle(stat);
  }

}
