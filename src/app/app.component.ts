import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  appareils = [
    {
      name: 'Machine à laver',
      status: 'allumé'
    },
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  arrayPosts = [
    {
      title: 'Mon premier post',
      content: 'blablablablab',
      loveIts: '0',
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'rien à dire de plus',
      loveIts: '0',
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'long',
      loveIts: '0',
      created_at: new Date()
    }

  ]

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
    },  4000
    );
  }
  onAllumer(){
    console.log('on allume tout');
  }
}
