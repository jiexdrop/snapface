import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from '../core/models/face-snap.model';
import { FaceSnapsService } from '../core/services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnapId!: number;
  faceSnap$!: Observable<FaceSnap>;
  snapped!: boolean;
  buttonText!: string;


  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // get id of facesnap from url
    this.faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(this.faceSnapId);

    this.snapped = false;
    this.buttonText = "Oh snap !";
  }

  onSnap() {
    if (!this.snapped) {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(this.faceSnapId, 'snap').pipe(
        tap(() => this.buttonText = 'Oops, unSnap!')
      );

    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(this.faceSnapId, 'unsnap').pipe(
        tap(() => this.buttonText = 'Oh Snap!')
      );
    }
    this.snapped = !this.snapped;
  }
}
