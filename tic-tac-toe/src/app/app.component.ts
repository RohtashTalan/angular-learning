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

  constructor(private toastr: ToastrService){};

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
        this.winMessage = this.itemArray[a] + " won the match"
        return this.toastr.success(this.winMessage)
      } else if (this.itemArray[a] !== 'empty' && this.itemArray[b] !== 'empty' && this.itemArray[c] !== 'empty' && !this.itemArray.includes('empty')) {
        this.winMessage = " no one won the match"
        return this.toastr.success(this.winMessage)
      }

    }
    return false
  }



  handleClick(itemNumber: number) {
    if (this.winMessage) {
      return this.toastr.success(this.winMessage)
    }

    if (this.itemArray[itemNumber] === 'empty') {
      this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle'

      this.isCross = !this.isCross
    } else {
      return this.toastr.info('Already filled')
    }

    this.checkIsWinner()
  return
  }


  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty')
  }



}
