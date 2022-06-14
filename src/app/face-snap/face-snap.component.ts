import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  snapped!: boolean;
  buttonText!: string;


  constructor() { }

  ngOnInit() {
    this.snapped = false;
    this.buttonText = "Oh snap !";
  }

  onSnap(){
    if(!this.snapped){
      this.buttonText = "Oops, un-snap !";
      this.faceSnap.snaps++;
    } else {
      this.buttonText = "Oh snap !";
      this.faceSnap.snaps--;
    }
    this.snapped = !this.snapped;
  }
}
