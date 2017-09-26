import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy-form',
  templateUrl: './udemy-form.component.html',
  styleUrls: ['./udemy-form.component.css']
})
export class UdemyFormComponent implements OnInit {
  categories = [
    {id: 1, name:"Development"},
    {id: 2, name:"Arts"},
    {id: 3, name:"Language"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
