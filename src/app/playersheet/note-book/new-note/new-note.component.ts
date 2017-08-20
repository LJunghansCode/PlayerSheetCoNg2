import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from './../../../services/player/player.service';
import { slideLeftAnimation } from './../../../_animations/slideBotAnim';
import { FormService } from './../../../services/form/form.service';
import { Player } from './../../../../models/player';
import { Note } from './../../../../models/note';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.sass'],
  animations: [slideLeftAnimation]
})
export class NewNoteComponent implements OnInit {
  keyWords: string[];
  player: Player;
  formMessage: string;
  keyword: string;
  public noteForm = this.fb.group({
      title: ['', Validators.required],
      keyWords: [[''], Validators.required],
      content: ['', Validators.required]
    });
  constructor(private playerService: PlayerService, private formService: FormService, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.keyWords = [];
    this.playerService._playerSingle
      .subscribe(
        (player) => {
          this.player = player;
        }
      );
  }
  newKeyWord(keyWord) {
    if (keyWord) {
      if (keyWord.length < 1) {
        return;
      } else {
        this.keyWords.push(keyWord);
        this.keyword = '';
      }
    }
  }
  deleteKeyWord(index) {
    this.keyWords.splice(index, 1);
  }
  newNote() {
    const FIELD = this.noteForm.value;
    if (!FIELD.title || !FIELD.content) {
      this.formMessage = 'Oops, missed a field';
    } else {
      const note = new Note(FIELD.title, this.keyWords, FIELD.content);
      this.player.notes.push(note);
      this.noteForm.reset();
      this.playerService.updateCurrentPlayer(this.player);
      this.route.navigateByUrl(`/player/${this.player.id}/notes`);
    }

   ;
  }

}
