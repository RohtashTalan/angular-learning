import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';

  winMessage: string = '';
  isCross = false;
  itemArray: string[] = new Array(9).fill('empty');


  checkIsWinner = () => {
    let winnerLogin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 5, 8],
      [2, 5, 6]
    ]


    for (const condition of winnerLogin) {
      let [a, b, c] = condition;
      if (this.itemArray[a] === this.itemArray[b] && this.itemArray[a] === this.itemArray[c] &&
        this.itemArray[a] !== 'empty') {
        return this.itemArray[a]
      }
    }
return false
  }


  
  constructor(private toastr: ToastrService) { }

  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty')
  }
}
