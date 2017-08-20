import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from './../../../services/player/player.service';
import { Player } from './../../../../models/player';
import { slideInOutAnimation } from './../../../_animations/slideAnim';
import { fadeInAnimation } from './../../../_animations/fadeAnim';
import { slideLeftAnimation } from './../../../_animations/slideBotAnim';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.sass'],
  animations: [slideInOutAnimation, fadeInAnimation, slideLeftAnimation],
})
export class PlayerCardComponent implements OnInit {
  @Input()
  player: Player;
  @Input()
  index: any;

  constructor(public playerService: PlayerService) { }


  ngOnInit() {
  }
  delete(id) {
    console.log(this.index);
    this.playerService.deletePlayerById(id, this.index);
  }
}
