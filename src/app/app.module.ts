import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snaps/components/face-snap/face-snap.component';

import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './face-snaps/components/single-face-snap/single-face-snap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    FaceSnapsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
