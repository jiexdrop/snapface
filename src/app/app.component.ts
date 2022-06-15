import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { concatMap, mergeMap, delay, exhaustMap, map, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // const interval$ = interval(500);
    // interval$.subscribe();
    //interval(1000).subscribe(value => console.log(value !== 3 ? 'Tick' : 'BANG'));
    //interval(1000).subscribe(value => console.log(value % 3 !== 0 ? 'Tick' : 'BANG'));

    // interval(500).pipe(
    //   map(value => 2 * (value + 1)),
    //   tap(value => console.log(value))
    // ).subscribe();

    interval(1000).pipe(
      take(3),
      map(value => getValString(value)),
      tap(value => console.log(value)),
      mergeMap(message => processMessage$(message))
    ).subscribe();

    function processMessage$(message: string) {
      
      return of(message).pipe(
        delay(3000),
        tap(value => console.log(value + "processed")),
      );
    }

    function getValString(value: number): string {
      if (value == 0) {
        return "first";
      }
      else if (value == 1) {
        return "second";
      } else {
        return "third";
      }
    }
  }


}




