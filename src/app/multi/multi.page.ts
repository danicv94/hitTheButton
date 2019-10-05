import { Component } from '@angular/core';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.page.html',
  styleUrls: ['./multi.page.scss'],
})
export class MultiPage {

  showStart: boolean = true;
  showCountdown: boolean = false;
  showGame: boolean = false;
  timeout: number = 3;
  timeLeft: number = 5;
  scorePlayer1: number = 0;
  scorePlayer2: number = 0;
  winnerScore: number = 0;
  endGame: boolean = false;
  winner: string = '';

  // For timers we should create a service
  startGame() {
    this.showStart = false;
    this.showCountdown = true;
    this.showGame = true;
    setTimeout(time => {
      if (this.timeout > 0) {
        this.timeout -= 1;
        this.startGame();
      }
      else {
        this.showCountdown = false;
        this.startTimer();
      }
    }, 1000)
  }

  startTimer() {
    setTimeout(time => {
      if (this.timeLeft > 0) {
        this.timeLeft -= 1;
        this.startTimer();
      }
      else {
        this.finishGame();
      }
    }, 1000)
  }

  finishGame() {
    this.endGame = true;
    if (this.scorePlayer1 > this.scorePlayer2) {
      this.winner = 'Player1';
      this.winnerScore = this.scorePlayer1;
    }
    else if (this.scorePlayer2 > this.scorePlayer1) {
      this.winner = 'Player2';
      this.winnerScore = this.scorePlayer2;
    }
    else {
      this.winner = 'Draw'
    }
  }

  increaseScore(player: number) {
    if (player === 1) this.scorePlayer1 += 1;
    if (player === 2) this.scorePlayer2 += 1;
  }

  restartGame() {
    this.showGame  = true;
    this.timeout = 3;
    this.timeLeft = 5;
    this.scorePlayer1  = 0;
    this.scorePlayer2  = 0;
    this.winnerScore  = 0;
    this.endGame = false;
    this.startGame();
  }

}
