import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() likesCount = 0;
  @Input() isLiked = false;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isLiked = !this.isLiked;
    if (!this.isLiked) {
      this.likesCount--;
    } else {
      this.likesCount++;
    }
  }

}
