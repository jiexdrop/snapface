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

  constructor() { }

  ngOnInit() {
    this.title = "Snap Title";
    this.description = "A description that describes";
    this.createdDate = new Date();
    this.snaps = 6;
  }

}
