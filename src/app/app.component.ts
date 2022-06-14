import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  snap1!: FaceSnap;
  snap2!: FaceSnap;
  snap3!: FaceSnap;

  

  ngOnInit(): void {
    this.snap1 = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );

    this.snap2 = new FaceSnap(
      'Neko Atsume',
      'Un jeu mobile',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    );

    this.snap3 = new FaceSnap(
      'MyPhone 3366',
      'Un super téléphone',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      3
    );
  }
  
}
