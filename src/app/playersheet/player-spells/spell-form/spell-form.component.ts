import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { slideFullAnimation } from './../../../_animations/fullSlide';
import { slideLeftAnimation } from './../../../_animations/slideBotAnim';
import { PlayerService } from './../../../services/player/player.service';
import { FormService } from './../../../services/form/form.service';
import { Player } from './../../../../models/player';
import { Spell } from './../../../../models/spell';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spell-form',
  templateUrl: './spell-form.component.html',
  styleUrls: ['./spell-form.component.sass'],
  animations: [slideFullAnimation, slideLeftAnimation ]
})
export class SpellFormComponent implements OnInit {
  player: Player;
  formMessage: string;
  public spellForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

  spellList: any;
  constructor(private playerService: PlayerService, private formService: FormService, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.playerService._playerSingle
      .subscribe(
        (player) => {
          this.player = player;
        }
      );
  }
    newSpell() {
    const FIELD = this.spellForm.value;
    if (!FIELD.title || !FIELD.description) {
      this.formMessage = 'Oops, missed a field';
    } else {
      const spell = new Spell(FIELD.title, FIELD.description);
      this.player.spellList.push(spell);
      this.spellForm.reset();
      this.playerService.updateCurrentPlayer(this.player);
      this.route.navigateByUrl(`/player/${this.player.id}/spells`);
    }

   ;
  }
}
