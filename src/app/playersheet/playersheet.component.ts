import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from './../services/player/player.service';
import { LoginService } from './../services/login/login.service';
import { UiGlobalService } from './../services/ui/ui-global.service';
import { Player } from './../../models/player';
import { User } from './../../models/user';
import 'rxjs/add/operator/switchMap';
import { slideTopAnimation } from './../_animations/slideTopAnim';
import { fadeInAnimation } from './../_animations/fadeAnim';

@Component({
  selector: 'app-playersheet',
  templateUrl: './playersheet.component.html',
  styleUrls: ['./playersheet.component.sass'],
  animations: [slideTopAnimation, fadeInAnimation]
})
export class PlayersheetComponent implements OnInit{
  private routeSub: any;
  exampleSheetToggle: boolean;
  player: Player;
  user: User;
  id: number;
  currPartial: string;
  slots: any;
  masterStat: any;
  routeMap = [
      {'name': 'info', 'title': 'General Information', 'active': false, 'icon': 'address-card'},
      {'name': 'spells', 'title': 'Spell Details', 'active': false, 'icon': 'bolt'},
      {'name': 'details', 'title': 'Inventory and Details', 'active': false, 'icon': 'bars'},
      {'name': 'companions', 'title': 'Companions', 'active': false, 'icon': 'paw'},
      {'name': 'notes', 'title': 'Note Book', 'active': false, 'icon': 'sticky-note'},
      {'name': 'settings', 'title': 'Settings', 'active': false, 'icon': 'cogs'}
    ];

  constructor(  private playerService: PlayerService,
  private route: ActivatedRoute, private router: Router,
  private location: Location, private loginService: LoginService, private uiService: UiGlobalService) {
  this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    }); }
  ngOnInit() {
  this.loginService._currentUser
    .subscribe(
      (user) => {
        if (user) {
          this.user = user.user;
        }
      }
    );
   this.route.params.subscribe(params => {
     this.id = params['id'];
     // Make sure this isn't example
     if ( this.id.toString() === '12345' ) {
        this.exampleSheetToggle = true;
        this.playerService.createExamplePlayer();
     }else {
       this.playerService.getPlayerById(this.id);
     }
     this.playerService._playerSingle
      .subscribe((player) => {
        if (player) {
            this.player = player;
            this.player.masterStats = this.player.organizeStatsArray();
        }
      }, (error) => {
        console.error(error);
      }, () => {
      });
   });
  }
  toggleNot() {
    this.uiService.toggleExampleNotification();
  }
  getNotification() {
    return this.uiService.exampleStatus();
  }
  getRoute(route) {
    return route.name;
  }

}
