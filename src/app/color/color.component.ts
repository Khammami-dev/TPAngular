import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @Input()  defaultColor = 'red';
  color = this.defaultColor;
   @Output() sendDataToDad = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.defaultColor);
  }
  changeColor(newColor: string) {
    this.color = newColor;
  }
  emitEvent(){
    this.sendDataToDad.emit(this.color);
  }

}
