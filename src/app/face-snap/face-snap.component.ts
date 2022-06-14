import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  snapped!: boolean;
  imageUrl!: string;
  buttonText!: string;

  constructor() { }

  ngOnInit() {
    this.title = "Snap Title";
    this.description = "A description that describes";
    this.createdDate = new Date();
    this.snaps = 6;
    this.snapped = false;
    this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
    this.buttonText = "Oh snap !";
  }

  onSnap(){
    if(!this.snapped){
      this.buttonText = "Oops, un-snap !";
      this.snaps++;
    } else {
      this.buttonText = "Oh snap !";
      this.snaps--;
    }
    this.snapped = !this.snapped;
  }
}
