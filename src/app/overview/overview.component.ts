import { Component, OnInit, OnDestroy } from '@angular/core';
import { fadeInAnimation } from './../_animations/fadeAnim';
import { Player } from './../../models/player';
import { PlayerService } from './../services/player/player.service';
import { FormService } from './../services/form/form.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass'],
  animations: [fadeInAnimation]
})
export class OverviewComponent implements OnInit, OnDestroy {
   player: Player;
   savingThrows: any;
  constructor(private playerService: PlayerService, private formService: FormService) { }

  ngOnInit() {
    this.playerService._playerSingle
      .subscribe(
        (player) => {
          if (player) {
            console.log(player)
            this.player = player;
            if (!player.savingThrows) {
                player.savingThrows = {
                  'strength': { 'title': 'Strength', 'value': '' },
                  'dexterity': { 'title': 'Dexterity', 'value': ''  },
                  'constitution': { 'title': 'Constitution', 'value': ''  },
                  'intelligence': { 'title': 'Intelligence', 'value': '' },
                  'wisdom': { 'title': 'Wisdom', 'value': ''  },
                  'charisma': { 'title': 'Charisma', 'value': ''  }
              };
            }
          }
        }
      );
      this.savingThrows = this.player.savingThrows;
  }
  ngOnDestroy() {
       this.formService.updatePlayerDbCall(this.player);
  }
  update() {
    this.formService.updatePlayerDbCall(this.player);
  }

}
