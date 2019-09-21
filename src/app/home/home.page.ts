import { Component } from '@angular/core';
import { MenuOptions } from 'src/utils/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  menuOptions: MenuOptions[];

  ngOnInit(){

    this.menuOptions = [
      {
        name: 'Solo',
        url:  '/solo',
        color: '#fff'
      },
      {
        name: 'Multi',
        url:  '/multi',
        color: '#cecece'
      },
      {
        name: 'Reto',
        url:  '/challenges',
        color: '#b3b3b3'
      },
    ]

  }

}
