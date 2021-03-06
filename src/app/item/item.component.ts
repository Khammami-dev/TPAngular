import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() sendDataToDad = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  emitEvent(){
    this.sendDataToDad.emit();
  }
}
