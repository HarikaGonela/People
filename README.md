# Peopple

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

# Functionality 
This projects use the two npm libs 
    1) ag-grid -> grid wich supports the add row and edit row inline 
    2) uuid -> generate the unique Id for each people added.
Note: ag-grid, after seeing the in-line edit statement from the assignment, decided to go with ag-grid which i was used long back for now this assignment helped to revise my ag-grid knowledge i can there lot many changes from the version i have used and the current version.

# Highlites
1) Not used to dialog modal for adding the People information.
2) All the functionality has been covered under a single page.
3) Hilighed Newly added row with red color.
4) Implemented the lazy loading concept in angular which is one of the beset practices we have to follow
5) On Tab Use ca able to provide the inputes it will be easy
6) No CSS frames works has been used.


# Desingn Pattern
1) Constructor Design Pattern -> Grid Columns.
2) Prototype Pattern -> DatePiker
3) Module Design Pattern -> used for lazy Loading
4) Observer Pattern -> to fetch the data via async pipe from the local storage.

# Improvements 
1) Validation for user inputs
2) Grid can be render in any resolutions but colum headers shown as ... in lower resulution but there is no prlblem in providing inputs.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
