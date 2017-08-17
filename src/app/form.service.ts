import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';

@Injectable()
export class FormService {
  editingForm: boolean;
  constructor(private playerService: PlayerService) { }


updatePlayerDbCall(player) {
  this.playerService.updateCurrentPlayer(player);
}
saveAllChanges(player) {
  if (!this.editingForm) {

  }
}
companionUpdate(stat, companion, player ) {
  if (stat.value === companion[stat.field]) {
    stat.editing = false;
  } else {
    stat.editing = true;
    // Store 'this' to use in timeout
    const This = this;
    stat.waiting = setTimeout(function(){
      companion[stat.field] = stat.value;
      This.playerService.updateCurrentPlayer(player);
      stat.editing = false;
    }, 2000);
    stat.value = companion[stat.field];
  }
}
fieldChangedCallDbAfterWait(stat, player) {
  if (stat.value === player[stat.stat]) {
    stat.editing = false;
  } else {
    stat.editing = true;
    // Store 'this' to use in timeout
    const This = this;
    stat.waiting = setTimeout(function(){
      This.playerService.updateCurrentPlayer(player);
      stat.editing = false;
    }, 2000);
    stat.value = player[stat.stat];
  }
}
editCssToggle(stat) {
      if (stat) {
        if (stat.editing) {
          return 'is-editing';
        } else if (stat.editing === undefined )  {
          return 'done-editing';
        } else if (!stat.editing) {
            return 'done-editing';
          }
        }
}
currentlyChanging(stat) {
    stat.editing = true;
    clearTimeout(stat.waiting);
  }
}
