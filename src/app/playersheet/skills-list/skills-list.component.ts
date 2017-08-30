import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../models/skill';
import { Player } from '../../../models/player';
import { PlayerService } from './../../services/player/player.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.sass']
})
export class SkillsListComponent implements OnInit {
  private skillsLib = [{
                'primarySkill': 'dexterity',
                'title': 'Dexterity',
                'skills': [{
                    'statName': 'acrobatics',
                    'title' : 'Acrobatics'
                }, {
                    'statName': 'sleight-of-hand',
                    'title' : 'Sleight of Hand'
                }, {
                    'statName': 'stealth',
                    'title' : 'Stealth'
                }]
            },
            {
                'primarySkill': 'strength',
                'title': 'Strength',
                'skills': [{
                    'statName': 'athletics',
                    'title' : 'Athletics'
                }]
            },
            {
                'primarySkill': 'intelligence',
                'title': 'Intelligence',
                'skills': [{
                    'statName': 'arcana',
                    'title' : 'Arcana'
                }, {
                    'statName': 'history',
                    'title' : 'History'
                }, {
                    'statName': 'investigation',
                    'title' : 'Investigation'
                }, {
                    'statName': 'nature',
                    'title' : 'Nature'
                }, {
                    'statName': 'religion',
                    'title' : 'Religion'
                }]
            },
            {
                'primarySkill': 'wisdom',
                'title': 'Wisdom',
                'skills': [{
                    'statName': 'animal-handling',
                    'title' : 'Animal Handling'
                }, {
                    'statName': 'insight',
                    'title' : 'Insight'
                }, {
                    'statName': 'medicine',
                    'title' : 'Medicine'
                }, {
                    'statName': 'perception',
                    'title' : 'Perception'
                }, {
                    'statName': 'survival',
                    'title' : 'Survival'
                }]
            },
            {
                'primarySkill': 'charisma',
                'title': 'Charisma',
                'skills': [{
                    'statName': 'deception',
                    'title' : 'Deception'
                }, {
                    'statName': 'intimidation',
                    'title' : 'Intimidation'
                }, {
                    'statName': 'performance',
                    'title' : 'Performance'
                }, {
                    'statName': 'persuasion',
                    'title' : 'Persuasion'
                }]
            }
        ];
  private listToShow: Skill[];
  player: Player;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService._playerSingle
      .subscribe(
        (player) => {
          if (player && player !== undefined) {
            this.player = player;
            if ( this.player.id === 12345 || this.player.skills === undefined ) {
              this.player.skills = [];
            }
          }
        }
      );
  }
  addSkillToPlayer(skill) {
    const skillToAdd = new Skill(skill.title, skill.statName, true);
    this.player.skills.push(skillToAdd);
    this.playerService.updateCurrentPlayer(this.player);
  }
  removeSkillFromPlayer(skillIndex) {
    this.player.skills.splice(skillIndex, 1);
    this.playerService.updateCurrentPlayer(this.player);
  }
checkEdit(skill) {
if (!skill.prof) {
  skill.prof = 0;
}
 if (!skill.editing || skill.editing === false || skill.editing === undefined) {
   return 'is-hidden';
 } else {
   return 'is-visible';
 }
}
toggle(skill) {
  if (!skill.editing) {
    skill.editing = true;
  } else {
    this.playerService.updateCurrentPlayer(this.player);
    skill.editing = false;
  }
}
}

