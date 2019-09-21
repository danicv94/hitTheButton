import { Component } from '@angular/core';

@Component({
  selector: 'app-solo',
  templateUrl: './solo.page.html',
  styleUrls: ['./solo.page.scss'],
})
export class SoloPage {

  start: boolean = false;
  showCountdown: boolean = false;
  timeout: number = 3;
  timeLeft: number = 5;
  score: number = 0;
  endGame: boolean = false;
 
  // For timers we should create a service
  startTimer(){
    this.showCountdown = true;
    setTimeout(time =>{
      if (this.timeout>0){
        this.timeout -= 1;
        this.startTimer();
      }
      else{
        this.showCountdown = false;
        this.start = true;
        this.startTimer2();
      }
    }, 1000)
  }

  startTimer2(){
    setTimeout(time =>{
      if (this.timeLeft>0){
        this.timeLeft -= 1;
        this.startTimer2();
      }
      else{
        this.finishGame();
      }
    }, 1000)
  }

  finishGame(){
    this.endGame=true;
  }

  increaseScore(){
    this.score+=1;
  }

}
