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
  routeMap = [
      {'name': 'spells', 'title': 'Spell Details', 'active': false},
      {'name': 'info', 'title': 'General Information', 'active': false},
      {'name': 'details', 'title': 'Inventory and Equipment', 'active': false},
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
    if (currLink[0]) {
   
    }
    const currentPath = this.location.path();
    let endString = '';
    for (let i = currentPath.length - 1; i < currentPath.length; i--) {
      if(currentPath[i] === '/') {
        break;
      }
      endString += currentPath[i];
    }
    const final = endString.split('').reverse().join('');
    if (final === route.name) {
      return 'is-active';
    } else {
      return '';
    }
  }


}
