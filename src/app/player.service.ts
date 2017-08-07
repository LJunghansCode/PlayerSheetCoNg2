import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Player } from './../models/player';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';



@Injectable()
export class PlayerService {
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  // Api Urls
  newPlayerUrl = 'api/new_player';
  getPlayersUrl = 'api/get_my_players';
  playerIdURl = 'api/get_player';
  updateUrl = 'api/update_player';
  // Curr Player Truth
  private playersSource = new BehaviorSubject(undefined);
  public _playersArray: Observable<Player[]> = this.playersSource.asObservable();
  // Player List Truth
  private singlePlayerSource = new BehaviorSubject(undefined);
  public _playerSingle: Observable<Player> = this.singlePlayerSource.asObservable();

  constructor(private http: Http) { }
  public updateCurrentPlayer(player) {
    console.log('updating function');
    this.updatePlayerById(player);
  }
  updatePlayerById(player) {
    this.http.post(this.updateUrl, {player}, this.options).subscribe(
      (res) => {
        console.log(res)
        this.getPlayerById(player.id)
      },
      (error) => {
        console.error(error)
      },
      () => {
        // done
      }
    );
  }
  newPlayer(playerForm: FormData) {
    this.http.post(this.newPlayerUrl, { playerForm }, this.options)
      .map(this.processNewPlayer).subscribe();
    this.getPlayersForUser();
  }
  getPlayersForUser() {
    this.http.get(this.getPlayersUrl, this.options)
      .map(this.processPlayers)
      .subscribe((players) => {
        this.playersSource.next(players);
      }, (error) => {
        console.error(error);
      },
      () => {
        // gotem
      });
  }
  getPlayerById(id) {
    this.http.post(this.playerIdURl, { id: id }, this.options)
      .map(this.instantiatePlayerFromDatabase)
      .subscribe((player) => {
        this.singlePlayerSource.next(player);
      }, (error) => {
        console.error(error);
      },
      () => {
        // gotem
      });
  }
  private processPlayers(res: Response) {
    const body = res.json();
    const newData = body.data;
    return newData;
  }
  private processNewPlayer(res: Response) {
    const body = res.json();
    const newData = body.data;
    return newData;
  }
  private instantiatePlayerFromDatabase(res: Response) {
    const body = res.json();
    const bd = body.data;
    // tslint:disable-next-line:max-line-length BIG LINE //
    const playerInstance = new Player(bd._id, bd.accountEmail, bd.campaign, bd.realName, bd.name, bd.race, bd.classType, bd.alignment, bd.sex, bd.size, bd.age, bd.height, bd.weight, bd.level, bd.initiative, bd.speed, bd.strength, bd.dexterity, bd.constitution, bd.intelligence, bd.wisdom, bd.charisma, bd.currentHitPoints, bd.tempHitPoints, bd.spellList, bd.experience, bd.skills, bd.personalityTraits, bd.ideals, bd.bonds, bd.flaws, bd.attacksSpellCasting, bd.featuresTraits, bd.equipment, bd.proficiencies, bd.languages, bd.appearance, bd.alliesOrganizations, bd.backStory, bd.treasureInventory, bd.spellCastingClass, bd.spellCastingAbility, bd.spellSaveDC, bd.spellSaveBonus, bd.armorClass, bd.proficiencyBonus, bd.borderColor, bd.companions, bd.notes);
    playerInstance.calculateModifiers();
    return playerInstance;
  }
}
