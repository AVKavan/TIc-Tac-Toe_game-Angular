import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  

   squares!: any[];
   isNextX!: boolean;
   winner!: string | null;
   active: boolean = false;
   counter!: number;
  constructor() { }

  ngOnInit(): void {
    this.newgame();
    
  }


  newgame(){
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.isNextX = true;
    this.counter =3;
  }

  get Player()
  {
    return this.isNextX? 'X': 'O';
  }

  makeMove(indx: number)
  {
    if(!this.squares[indx])
    {
      this.squares.splice(indx,1,this.Player)
      this.isNextX = !this.isNextX;
    }
    this.winner = this.getWinner();
    if(this.winner)
    {   let myvar= this.countdown(3);
        setTimeout(()=>{this.newgame(); clearInterval(myvar);},3000);
         
    }

  }
  isFull(square: any)
  {
    return square==null;
  }

 getWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
  
  countdown(i: number)
   {   this.counter=i;
      return setInterval(()=>{this.counter--},1000); 
      
  }
}
