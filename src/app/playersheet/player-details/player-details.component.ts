import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../services/player/player.service';
import { FormService } from './../../services/form/form.service';
import { Player } from './../../../models/player';
import { slideTopAnimation } from './../../_animations/slideTopAnim';
import { slideLeftAnimation } from './../../_animations/slideBotAnim';


@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.sass'],
  animations: [slideTopAnimation, slideLeftAnimation ],
})
export class PlayerDetailsComponent implements OnInit {
  player: Player;
  details: any[];
  inventory: any;
  filter: string;
  constructor(private playerService: PlayerService, private formService: FormService) { }

  ngOnInit() {
    this.playerService._playerSingle
      .subscribe(
         (player) => {
          if (player) {
            this.player = player;
            this.details = player.masterStats.charDetails;
            this.inventory = player.masterStats.treasureInventory;
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
