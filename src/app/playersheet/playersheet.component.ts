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
  ngOnInit() {
   this.route.params.subscribe(params => {
     this.id = params['id'];
     this.playerService.getPlayerById(this.id);
     this.playerService._playerSingle
      .subscribe((player) => {
        if (!this.player && player) {
            this.player = player;
            this.player.masterStats = this.player.organizeStatsArray();
            console.log(this.player.masterStats)
        }
      }, (error) => {
        console.error(error);
      }, () => {
        // done
      });
   });
  }


}
