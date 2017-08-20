import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { slideLeftAnimation } from './../../../_animations/slideBotAnim';
import { Player } from './../../../../models/player';
import { Companion } from './../../../../models/companion';
import { PlayerService} from './../../../services/player/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-companion',
  templateUrl: './new-companion.component.html',
  styleUrls: ['./new-companion.component.sass'],
  animations: [slideLeftAnimation]
})
export class NewCompanionComponent implements OnInit {
  player: Player;
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
  public companionForm = this.fb.group({
    name: ['', Validators.required],
    traits: ['', Validators.required],
    actions: ['', Validators.required],
    size: ['', Validators.required],
    type: ['', Validators.required],
    alignment: ['', Validators.required],
    armorClass: ['', Validators.required],
    health: ['', Validators.required],
    speed: ['', Validators.required],
    strength: ['', Validators.required],
    dexterity: ['', Validators.required],
    constitution: ['', Validators.required],
    intelligence: ['', Validators.required],
    wisdom: ['', Validators.required],
    charisma: ['', Validators.required],
    challengeRating: ['', Validators.required],
    senses: ['', Validators.required],
    passivePerception: ['', Validators.required],
    description: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private playerService: PlayerService, private route: Router) { }

  ngOnInit() {
    this.playerService._playerSingle
      .subscribe(
        (player) => {
          this.player = player;
        }
      );
  }
  newCompanion() {
    const field = this.companionForm.value;
    // tslint:disable-next-line:max-line-length
    const companion = new Companion(field.name, field.traits, field.actions, field.size, field.tpye, field.alignment, field.armorClass, field.health, field.speed, field.strength, field.dexterity, field.constitution, field.intelligence, field.wisdom, field.charisma, field.challengeRating, field.senses, field.passivePerception, field.description);
    this.player.companions.push(companion);
    this.companionForm.reset();
    this.playerService.updateCurrentPlayer(this.player);
    this.route.navigateByUrl(`/player/${this.player.id}/companions`);
  }
}
