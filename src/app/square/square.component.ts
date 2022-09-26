import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button class="btn btn-dark bg-gradient" *ngIf="!value">{{value}}</button>
    <button class="btn btn-success bg-gradient " *ngIf="value == 'X'">{{value}}</button>
    <button class="btn btn-primary bg-gradient strike" *ngIf="value == 'O'">{{value}}</button>

  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em ; }',
       'strike {text-decoration: line-through;}'
  ]
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';

}
