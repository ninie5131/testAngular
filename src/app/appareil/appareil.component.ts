import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareiStatus: string;

  constructor() {
  }

  ngOnInit() {
  }

  getStatus() {
    return this.appareiStatus;
  }
  getColor() {
   if (this.appareiStatus === 'allumé') {
     return 'green';
   } else if (this.appareiStatus === 'éteint') {
     return 'red';
   }
  }
}
