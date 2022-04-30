# CrudFireBase function

This single page application (SPA) is made with a NoSQL database, Realtime from Firebase.

This SPA has the following routes:
1)'home': It is the root path.
2)'/list': Shows the list stored in Realtime. This route also has four buttons: deleteAll (empties the database), details (redirects to '/description/:id'), update (redirects to 'update/:id'), and delete (delete a song).
3)'/description': It appears empty when no data is sent and '/description/:id' shows the song data
4)'/new': Create and save a new song in the database using a form.
5)'/edit/:id': Update an existing song in the database using a form.


# CrudFireBase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

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


## Author

Kiowa del Carmen Andueza Cárdenes