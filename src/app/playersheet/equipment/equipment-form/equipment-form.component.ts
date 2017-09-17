import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { slideFullAnimation } from './../../../_animations/fullSlide';
import { slideLeftAnimation } from './../../../_animations/slideBotAnim';
import { PlayerService } from './../../../services/player/player.service';
import { FormService } from './../../../services/form/form.service';
import { Router } from '@angular/router';
import { Player } from './../../../../models/player';
import { Equipment } from './../../../../models/equipment';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.sass'],
  animations: [slideFullAnimation, slideLeftAnimation ]
})
export class EquipmentFormComponent implements OnInit {
  player: Player;
  formMessage: string;
  public equipmentForm = this.fb.group({
      name: ['', Validators.required],
      weight: [''],
      armorClass: [''],
      damage: [''],
      stealth: [''],
      type: [''],
      range: [''],
      itemType: [''],
      description: ['', Validators.required]
    });
  constructor(private playerService: PlayerService, private formService: FormService, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.playerService._playerSingle
      .subscribe(
        (player) => {
          this.player = player;
        }
      );
  }
newEquip() {
    const FIELD = this.equipmentForm.value;
    if (!FIELD.name || !FIELD.description) {
      this.formMessage = 'Needs at least a name and description';
    } else {
      // tslint:disable-next-line:max-line-length
      const equip = new Equipment(FIELD.name, FIELD.weight, FIELD.armorClass, FIELD.damage, FIELD.stealth, FIELD.type, FIELD.range, FIELD.itemType, FIELD.description);
      this.player.equipment.push(equip);
      this.equipmentForm.reset();
      this.playerService.updateCurrentPlayer(this.player);
      this.route.navigateByUrl(`/player/${this.player.id}/equipment`);
    }

   ;
  }
}
