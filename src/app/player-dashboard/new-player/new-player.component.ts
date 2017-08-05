import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlayerService } from './../../player.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.sass']
})
export class NewPlayerComponent implements OnInit {
  formMessage: string;
  public newPlayerForm = this.fb.group({
    realName  : ['', Validators.required],
    name      : ['', Validators.required],
    race      : ['', Validators.required],
    classType : ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private playerService: PlayerService) { }

  ngOnInit() {
  }
    doCreate(event) {
      this.playerService.newPlayer(this.newPlayerForm.value);
    }
}
