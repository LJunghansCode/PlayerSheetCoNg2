import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from './../player.service';
import { Player } from './../../models/player';
import 'rxjs/add/operator/switchMap';
import { slideTopAnimation } from './../_animations/slideTopAnim';
import { fadeInAnimation } from './../_animations/fadeAnim';

@Component({
  selector: 'app-playersheet',
  templateUrl: './playersheet.component.html',
  styleUrls: ['./playersheet.component.sass'],
  animations: [slideTopAnimation, fadeInAnimation]
})
export class PlayersheetComponent implements OnInit {
  private routeSub: any;
  player: Player;
  id: number;
  currPartial: string;
  slots: any;
  masterStat: any;
  routeMap = [
      {'name': 'info', 'title': 'General Information', 'active': false},
      {'name': 'spells', 'title': 'Spell Details', 'active': false},
      {'name': 'details', 'title': 'Inventory and Equipment', 'active': false},
      {'name': 'companions', 'title': 'Companions', 'active': false},
      {'name': 'notes', 'title': 'Note Book', 'active': false},
      {'name': 'settings', 'title': 'Settings', 'active': false}
    ];

  constructor(  private playerService: PlayerService,
  private route: ActivatedRoute,
  private location: Location) { }
  ngOnInit() {
   this.route.params.subscribe(params => {
     this.id = params['id'];
     this.playerService.getPlayerById(this.id);
     this.playerService._playerSingle
      .subscribe((player) => {
        if (!this.player && player) {
            this.player = player;
            this.player.masterStats = this.player.organizeStatsArray();
        }
      }, (error) => {
        console.error(error);
      }, () => {
        // done
      });
   });
  }
  getRoute(route) {
    return route.name;
  }
  ifActive(route) {
    const currLink = document.getElementsByClassName('is-active');
    const currentPath = this.location.path();
    let endString = '';
    for (let i = currentPath.length - 1; i < currentPath.length; i--) {
      if (currentPath[i] === '/') {
        break;
      }
      endString += currentPath[i];
    }
    const final = endString.split('').reverse().join('');
    if (final === route.name) {
      this.currPartial = route.title;
      return 'is-active';
    } else {
      return '';
    }
  }


}
