import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vary-spine',
  templateUrl: './vary-spine.component.html',
  styleUrls: ['./vary-spine.component.scss']
})
export class VarySpineComponent implements OnInit {

  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
