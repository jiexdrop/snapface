import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  snapped!: boolean;
  buttonText!: string;


  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // get id of facesnap from url
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);

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
