import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlayerService } from './../../player.service';
import { Router } from '@angular/router';
import { slideLeftAnimation } from './../../_animations/slideBotAnim';
import { fadeInAnimation } from './../../_animations/fadeAnim';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.sass'],
  animations: [slideLeftAnimation, fadeInAnimation]
})
export class NewPlayerComponent implements OnInit {
  formMessage: string;
  public newPlayerForm = this.fb.group({
    realName  : ['', Validators.required],
    name      : ['', Validators.required],
    race      : ['', Validators.required],
    classType : ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private playerService: PlayerService, private route: Router ) { }

  ngOnInit() {
  }
    doCreate() {
      this.playerService.newPlayer(this.newPlayerForm.value);
      this.newPlayerForm.reset();
      this.route.navigateByUrl('/player-dashboard');
    }
}
