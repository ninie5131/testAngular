import {Component, Input, OnInit} from '@angular/core';
import {PostListItemComponent} from '../post-list-item/post-list-item.component';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() arrayPosts: PostListItemComponent[];
  constructor() { }

  ngOnInit() {
  }

}
