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
  newPlayerUrl = 'api/new_player';
  getPlayersUrl = 'api/get_my_players';
  playerIdURl = 'api/get_player';
  private playersSource = new BehaviorSubject(undefined);
  public _playersArray: Observable<any> = this.playersSource.asObservable();

  private singlePlayerSource = new BehaviorSubject(undefined);
  public _playerSingle: Observable<Player> = this.singlePlayerSource.asObservable();

  constructor(private http: Http) { }
  newPlayer(playerForm: FormData) {
    this.http.post(this.newPlayerUrl, { playerForm }, this.options)
      .map(this.processNewPlayer).subscribe();
      this.getPlayersForUser();
  }
  getPlayersForUser() {
    this.http.get(this.getPlayersUrl, this.options)
      .map(this.processPlayerArray)
      .subscribe((players) => {
        this.playersSource.next(players);
      }, (error) => {
        console.error(error);
      });
  }
  getPlayerById(id) {
    this.http.post(this.playerIdURl, {id: id}, this.options)
      .map(this.processNewPlayer)
      .subscribe((player) => {
        this.singlePlayerSource.next(player);
      }, (error) => {
        console.error(error);
      });
  }
  private processPlayerArray(res: Response) {
    const body = res.json();
    const newData = body.data;
    return newData;
  }
  private processNewPlayer(res: Response) {
    const body = res.json();
    const newData = body.data;
    return newData;
  }
}
