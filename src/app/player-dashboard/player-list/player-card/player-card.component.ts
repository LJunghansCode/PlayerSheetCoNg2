import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from './../../../player.service';
import { Player } from './../../../../models/player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.sass']
})
export class PlayerCardComponent implements OnInit {
    @Input()
  player: Player;

  constructor(public playerService: PlayerService) { }


  ngOnInit() {
  }
  delete(id) {
    this.playerService.deletePlayerById(id);
  }
}
