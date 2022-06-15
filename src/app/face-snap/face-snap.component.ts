import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  snapped!: boolean;
  buttonText!: string;


  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit() {
    this.snapped = false;
    this.buttonText = "Oh snap !";
  }

  onSnap() {
    if (!this.snapped) {
      this.buttonText = "Oops, un-snap !";
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    } else {
      this.buttonText = "Oh snap !";
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    }
    this.snapped = !this.snapped;
  }
}
