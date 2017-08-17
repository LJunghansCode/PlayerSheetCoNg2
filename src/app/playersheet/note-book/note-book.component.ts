import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../player.service';
import { Player } from './../../../models/player';
import { Note } from './../../../models/note';
import { slideLeftAnimation } from './../../_animations/slideBotAnim';

@Component({
  selector: 'app-note-book',
  templateUrl: './note-book.component.html',
  styleUrls: ['./note-book.component.sass'],
  animations: [slideLeftAnimation]
})
export class NoteBookComponent implements OnInit {
  player: Player;
  notes: Note[];
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService._playerSingle
      .subscribe(
        (player) => {
          this.player = player;
          this.notes = player.notes;
        }
      );
  }
 deleteNote(index) {
    this.notes.splice(index, 1);
    this.playerService.updateCurrentPlayer(this.player);
  }

}
