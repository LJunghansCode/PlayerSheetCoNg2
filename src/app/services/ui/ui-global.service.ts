import { Injectable } from '@angular/core';
import { PlayerService } from './../player/player.service';

@Injectable()
export class UiGlobalService {

  // Trigger true on success and infer Ui toggling from these booleans
  regFormStatus: boolean;
  logFormSucc: boolean;
  registerModal: boolean;
  loginModal: boolean;
  exampleNotIfication: boolean;

  waiting: any;

  constructor(private playerService: PlayerService) { }
  toggleModal() {
    const regMod = this.registerModal;
    if (regMod === false || regMod === undefined) {
      this.registerModal = true;
      return true;
    } else {
      this.registerModal = false;
      return false;
    }
  }

  ifActiveReg() {
    const regMod = this.registerModal;
    if (regMod === false || regMod === undefined) {
      return ' ';
    } else {
      return 'is-active';
    }
  }
  toggleModalLog() {
    const logMod = this.loginModal;
    if (logMod === false || logMod === undefined) {
      this.loginModal = true;
      return true;
    } else {
      this.loginModal = false;
      return false;
    }
  }
  ifActiveLog() {
    const logMod = this.loginModal;
    if (logMod === false || logMod === undefined) {
      return ' ';
    } else {
      return 'is-active';
    }
  }
  registerStatus() {
    if (this.regFormStatus === true) {
      return 'is-success';
    } else {
      return ' ';
    }
  }
  triggerRegSuccess() {
    this.regFormStatus = true;
  }
  triggerRegFailure() {
    this.regFormStatus = false;
  }
  toggleExampleNotification() {
    if (this.exampleNotIfication === false || this.exampleNotIfication === undefined) {
      this.exampleNotIfication = true;
    } else {
      this.exampleNotIfication = false;
    }
  }
  exampleStatus() {
    if ( this.exampleNotIfication === true) {

      return 'is-hidden';
    } else {
      return '';
    }
  }

}
