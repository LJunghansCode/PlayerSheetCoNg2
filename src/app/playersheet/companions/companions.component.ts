import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Player } from './../../../models/player';
import { Companion } from './../../../models/companion';
import { PlayerService } from './../../services/player/player.service';
import { FormService } from './../../services/form/form.service';
import { slideLeftAnimation } from './../../_animations/slideBotAnim';
import { slideTopAnimation, slideTopAnimationRev } from './../../_animations/slideTopAnim';



@Component({
  selector: 'app-companions',
  templateUrl: './companions.component.html',
  styleUrls: ['./companions.component.sass'],
  animations: [slideLeftAnimation, slideTopAnimation, slideTopAnimationRev]
})
export class CompanionsComponent implements OnInit {
  player: Player;
  companions: Companion[];
    public formGuideLayout = [
      { 'field': 'name', 'placeholder': 'Name' },
      { 'field': 'traits', 'placeholder': 'Traits' },
      { 'field': 'actions', 'placeholder': 'Actions' },
      { 'field': 'size', 'placeholder': 'Size' },
      { 'field': 'type', 'placeholder': 'Type' },
      { 'field': 'alignment', 'placeholder': 'Alignment' },
      { 'field': 'armorClass', 'placeholder': 'Armor Class' },
      { 'field': 'health', 'placeholder': 'Health' },
      { 'field': 'strength', 'placeholder': 'Strength' },
      { 'field': 'dexterity', 'placeholder': 'Dexterity' },
      { 'field': 'constitution', 'placeholder': 'Constitution' },
      { 'field': 'intelligence', 'placeholder': 'Intelligence' },
      { 'field': 'wisdom', 'placeholder': 'Wisdom' },
      { 'field': 'charisma', 'placeholder': 'Charisma' },
      { 'field': 'challengeRating', 'placeholder': 'Challenge Rating' },
      { 'field': 'senses', 'placeholder': 'Senses' },
      { 'field': 'passivePerception', 'placeholder': 'Passive Perception' },
      { 'field': 'description', 'placeholder': 'Description' },
      { 'field': 'speed', 'placeholder': 'Speed' }
    ];
  constructor(private playerService: PlayerService, private fb: FormBuilder, private formService: FormService) { }
  ngOnInit() {
    this.playerService._playerSingle
      .subscribe(
      (player) => {
        if (player) {
          this.player = player;
          this.companions = this.player.companions;
        }
      }
      );
  }
  expanded(comp) {
    if (!comp.expandedTrigger || comp.expandedTrigger === undefined) {
      return false;
    } else {
      return true;
    }
  }
  expand(comp) {
    if (comp.expandedTrigger) {
      comp.expandedTrigger = false;
    } else {
      comp.expandedTrigger = true;
    }
  }
  deleteCompanion(index) {
    this.companions.splice(index, 1);
    this.playerService.updateCurrentPlayer(this.player);
  }
  update() {
    
  }
  maybeChanging(stat) {
    this.formService.currentlyChanging(stat);
  }

  registerChangeEnter(stat, companion, player) {
   
  }
  ifEditing(stat) {
    return this.formService.editCssToggle(stat);
  }

}
