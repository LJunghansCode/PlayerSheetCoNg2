import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from './../../_animations/slideAnim';
import { slideLeftAnimation } from './../../_animations/slideBotAnim';
import { PlayerService } from './../../services/player/player.service';
import { FormService } from './../../services/form/form.service';
import { Player } from './../../../models/player';
import { Equipment } from './../../../models/equipment';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.sass'],
  animations: [slideInOutAnimation, slideLeftAnimation ]
})
export class EquipmentComponent implements OnInit {
  player: Player;
  equipment: Equipment[];
  addingNew: boolean;
  filter: string;
  constructor(private playerService: PlayerService, private formService: FormService) { }

  ngOnInit() {
    this.playerService._playerSingle
      .subscribe(
        (player) => {
          if (player) {
            this.player = player;
            this.equipment = this.player.equipment;
          }
        }
      );
  }
  update() {
    this.formService.updatePlayerDbCall(this.player);
  }
  delete(equipIndex) {
        this.equipment.splice(equipIndex, 1);
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
