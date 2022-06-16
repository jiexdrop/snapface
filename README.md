# Snapface

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Observers examples

    const interval$ = interval(500);
    interval$.subscribe();
    interval(1000).subscribe(value => console.log(value !== 3 ? 'Tick' : 'BANG'));
    interval(1000).subscribe(value => console.log(value % 3 !== 0 ? 'Tick' : 'BANG'));

    interval(500).pipe(
        map(value => 2 * (value + 1)),
        tap(value => console.log(value))
    ).subscribe();

    interval(1000).pipe(
        take(3),
        map(value => getValString(value)),
        tap(value => console.log(value)),
        switchMap(message => processMessage$(message))
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

## Observers examples 2

    faceSnaps!: FaceSnap[];
    private destroy$!: Subject<boolean>;

    constructor(private faceSnapsService: FaceSnapsService) { }

    ngOnInit(): void {
        this.destroy$ = new Subject<boolean>();
        this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
        interval(1000).pipe(
            tap(console.log),
            takeUntil(this.destroy$),
        ).subscribe();
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
    }