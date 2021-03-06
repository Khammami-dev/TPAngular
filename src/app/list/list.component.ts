import { Component, OnInit } from '@angular/core';
import {Cv} from '../cv/model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];


  constructor() { }

  ngOnInit(): void {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 123456, 38),
      new Cv(2, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 123456, 38),
    ]
  }

}
