import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';

@Injectable()
export class FormService {

  constructor(private playerService: PlayerService) { }


updatePlayerDbCall(player) {
  this.playerService.updateCurrentPlayer(player);
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
      } else {
        return 'done-editing';
      }
    }
}
currentlyChanging(stat) {
    clearTimeout(stat.waiting);
  }
}
