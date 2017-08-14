import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../player.service';
import { FormService } from './../../form.service';
import { Player } from './../../../models/player';
import { slideInOutAnimation } from './../../_animations/slideAnim';
import { slideBotAnimation } from './../../_animations/slideBotAnim';


@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.sass'],
  animations: [slideInOutAnimation, slideBotAnimation ],
})
export class PlayerDetailsComponent implements OnInit {
  player: Player;
  details: any[];

  constructor(private playerService: PlayerService, private formService: FormService) { }

  ngOnInit() {
        this.playerService._playerSingle
      .subscribe(
      (player) => {
        if (player) {
          this.player = player;
          this.details = player.masterStats.charDetails;
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
