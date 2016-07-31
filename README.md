# Employee monthly payslip

## v1.0.0

This application is a payslip calculator, when you input the employee's details: first name, last name, annual salary(positive integer) and super rate(0% - 50% inclusive), payment start date (dd/mm/yyyy), the program should generate payslip information with name, pay period,  gross income, income tax, net income and super.

The calculation details is the following:
- pay period = per calendar month
- gross income = number of working days from start date until the end of month * daily salary
- income tax = based on the tax table
- net income = gross income - income tax
- super = gross income x super rate

> All calculation results is rounded to the whole dollar. If >= 50 cents round up to the next dollar increment, otherwise round down.

The first page is the calculator where you can input manualy data and the second page is the import.
In the second page you can upload a csv file with the following format :

```bash
First Name,Last Name,Annual Salary,Super Rate,Start Date
David,Rudd,60050,9%,01 March – 31 March
Ryan,Chen,120000,10%,01 March – 31 March
```

if the file have lines errors, the line is omitted but the rest of the file is analysed and an error message appears.

## Design

This application is built in a modular way. For this we use components helper include in Angular 1.5 and the structure is :

-app
  -common -> contains all common component like navbar, footer, etc
  -components -> all specific components which can't be used in several views
  -employee -> employee model, factory, validator, etc.
  -payslip -> payslip model
  -services -> common services

## Built with

* Angular 1.5
* Bootstrap
* webpack
* es6/es2015
* karma & jasmine

## Quick start

> Clone/Download the repo

```bash
# clone our repo
$ git clone https://github.com/laurentDellaNegra/employee-monthly-payslip.git

# change directory to your app
$ cd employee-monthly-payslip

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.


## Build files

* single run: `npm run build`
* build files and watch: `npm run watch`

## Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`
