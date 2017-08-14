import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from './../../_animations/slideAnim';
import { slideBotAnimation } from './../../_animations/slideBotAnim';
import { PlayerService } from './../../player.service';
import { FormService } from './../../form.service';
import { Player } from './../../../models/player';
import { Spell } from './../../../models/spell';

@Component({
  selector: 'app-player-spells',
  templateUrl: './player-spells.component.html',
  styleUrls: ['./player-spells.component.sass'],
  animations: [slideInOutAnimation, slideBotAnimation ]
})
export class PlayerSpellsComponent implements OnInit {
    player: Player;
    spellList: Spell[];
    addingNew: boolean;

  constructor(private playerService: PlayerService, private formService: FormService) { }

  ngOnInit() {
    this.playerService._playerSingle
      .subscribe(
        (player) => {
          if (player) {
            this.player = player;
            this.spellList = this.player.spellList;
          }
        }
      );
  }

  // Form Logic from Service
  update() {
    this.formService.updatePlayerDbCall(this.player);
  }
  delete(spellIndex) {
        this.spellList.splice(spellIndex, 1);
        this.playerService.updateCurrentPlayer(this.player);
  }
  maybeChanging(stat) {
    this.formService.currentlyChanging(stat);
  }
  toggleNew() {
    if (this.addingNew === undefined || !this.addingNew) {
        this.addingNew = true;
    } else {
      this.addingNew = false;
    }
  }
  registerChangeEnter(stat, player) {
    this.formService.fieldChangedCallDbAfterWait(stat, player);
  }
  ifEditing(stat) {
    return this.formService.editCssToggle(stat);
  }

}
