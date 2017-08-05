import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from './../player.service';
import { Player } from './../../models/player';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-playersheet',
  templateUrl: './playersheet.component.html',
  styleUrls: ['./playersheet.component.sass']
})
export class PlayersheetComponent implements OnInit {
  private routeSub: any;
  player: Player;
  id: number;
  currPartial: string;
  slots: any;
  masterStat: any;

  constructor(  private playerService: PlayerService,
  private route: ActivatedRoute,
  private location: Location) { }

  private instantiatePlayer(pi) {
    // tslint:disable-next-line:max-line-length BIG LINE //
    this.player = new Player(pi._id, pi.accountEmail, pi.campaign, pi.realName, pi.name, pi.race, pi.classType, pi.alignment, pi.sex, pi.size, pi.age, pi.height, pi.weight, pi.level, pi.initiative, pi.speed, pi.strength, pi.dexterity, pi.constitution, pi.intelligence, pi.wisdom, pi.charisma, pi.currentHitPoints, pi.tempHitPoints, pi.spellList, pi.experience, pi.skills, pi.personalityTraits, pi.ideals, pi.bonds, pi.flaws, pi.attacksSpellCasting, pi.featuresTraits, pi.equipment, pi.proficiencies, pi.languages, pi.appearance, pi.alliesOrganizations, pi.backStory, pi.treasureInventory, pi.spellCastingClass, pi.spellCastingAbility, pi.spellSaveDC, pi.spellSaveBonus, pi.armorClass, pi.proficiencyBonus, pi.borderColor, pi.companions, pi.notes);
    this.player.calculateModifiers();
    const s = this.player.spellSlots;
    this.slots = s.returnSpellSlotArray((s.createSpellSlots(this.player.level, this.player.spellcastingClass)));
    this.masterStat = this.player.organizeStatsArray();
  }

  ngOnInit() {
   this.route.params.subscribe(params => {
     this.id = params['id'];
     this.playerService.getPlayerById(this.id);
     this.playerService._playerSingle
      .subscribe((player) => {
        if (!this.player && player) {
          this.instantiatePlayer(player);
        }
      }, (error) => {
        console.error(error);
      }, () => {
        // done
      });
   });
  }


}
