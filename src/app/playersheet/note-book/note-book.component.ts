import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../services/player/player.service';
import { Player } from './../../../models/player';
import { Note } from './../../../models/note';
import { slideLeftAnimation } from './../../_animations/slideBotAnim';
import { fadeInAnimation } from './../../_animations/fadeAnim';

@Component({
  selector: 'app-note-book',
  templateUrl: './note-book.component.html',
  styleUrls: ['./note-book.component.sass'],
  animations: [slideLeftAnimation, fadeInAnimation]
})
export class NoteBookComponent implements OnInit {
  player: Player;
  notes: Note[];
  contentFilter: string;
  filterNote = new Note('',[],this.contentFilter);
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
