import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showDropDown: boolean = false;
  toggle() {
    this.showDropDown = !this.showDropDown;
  }
  constructor() { }

  ngOnInit() {
  }

}
