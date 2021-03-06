import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {
  @Input() color = 'white';
  @Input() bgcolor = 'blue';
  size = '10px';

  constructor() { }

  ngOnInit(): void {
  }
  changeSize(size: string): void{
    this.size = size;
  }
}
