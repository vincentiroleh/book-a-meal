# [BOOK A MEAL](https://api-meal-booking.herokuapp.com)

[![Build Status](https://travis-ci.org/vincentiroleh/book-a-meal.svg?branch=develop)](https://travis-ci.org/vincentiroleh/book-a-meal)
[![Coverage Status](https://coveralls.io/repos/github/vincentiroleh/book-a-meal/badge.svg?branch=develop)](https://coveralls.io/github/vincentiroleh/book-a-meal?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/33efd30a03c572f30426/maintainability)](https://codeclimate.com/github/vincentiroleh/book-a-meal/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/33efd30a03c572f30426/test_coverage)](https://codeclimate.com/github/vincentiroleh/book-a-meal/test_coverage)

Book-A-Meal is an application that allows customers to make food orders and helps the food vendor know what the customers want to eat.

## Table of Contents

- [Technologies](#technologies)
- [Features Implemented](#features-implemented)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Development](#development)
  - [Testing](#testing)
- [Limitations](#limitations)
- [Contributing Guide](#contributing-guide)
- [Author](#Author)

### Trello Board Stories

Project is currently being built with the Project Management Tool, Trello.
You can find the template
[HERE](https://trello.com/b/I7gCAIMu)

### Template

Template is hosted at [LINK](https://vincentiroleh.github.io/book-a-meal/UI/)

### API Deployment

API is deployed at [https://api-meal-booking.herokuapp.com](https://api-meal-booking.herokuapp.com)

### Documentation

Documentation page still in backlog

## Technologies

- HTML
- CSS
- JavaScript
- [NodeJS](https://nodejs.org/) - Runtime Environment
- [ExpressJs](https://expressjs.com/) - Web Application Framework

### Supporting Packages

#### Linter

- [ESLint](https://eslint.org/) - Linter Tool

#### Compiler

- [Babel](https://eslint.org/) - Compiler for Next Generation JavaScript

#### Test Tools

- [Mocha](https://mochajs.org/) - JavaScript Test Framework for API Tests (Backend)
- [Chai](http://chaijs.com/) - TDD/BDD Assertion Library for Node

## Features Implemented

### Users (Caterers and Customers)

- Users should be able to signin and signup on the app as either a caterer or a customer

### Caterers

- Caterers should be able to create meals
- Caterers should be able to modify meas
- Caterers should be able to delete meals
- Caterers should be able to setup menu for a particular day
- Caterers should be able to modify menu for a particular day
- Caterers should be able to get a particular order
- Caterers should be able to mark a pending order as delivered
- Caterers should be able to get all their orders on the platform
- Caterers should be able to get all their orders for a specific day
- Caterers should be able to get notifications when their meals are ordered

### Customers

- Customers should be able to make an order
- Customers should be able to modify or cancel an order within 100 seconds of creating it
- Customers should be able to get the menu for the day
- Customers should be able to get a particular order
- Customers should be able to get all their orders on the platform
- Customers should be able to get all their orders for a specific day

## Getting Started

### Installation

- Install [NodeJS](https://nodejs.org/) on your computer
- Clone this repository using `git clone https://github.com/vincentiroleh/book-a-meal`
- Run `npm install` to install all dependencies
- Run `npm run build` to build the project
- Run `npm start` to start the server
- Navigate to [localhost:3000](http://localhost:3000/) in browser to access the application

### Development

You can run `npm run dev` in development to use [Nodemon](https://nodemon.io/)

[Nodemon](https://nodemon.io/) watches for file changes and restarts your server.

### Testing

#### Prerequisites

- [Postman](https://getpostman.com/) - API Toolchain

#### Testing with Postman

- After installing as shown above
- Navigate to [localhost:3000](http://localhost:3000/) in
  [Postman](https://getpostman.com/) to access the application

### MEAL

```
 {
   id:   int,
   name: 'String',
   size: 'String',
   price: 'Int',
 }
```

##### Testing: Get all the meal options

- GET: http://localhost:3000/api/v1/meals

##### Testing: Add a meal option

- POST: http://localhost:3000/api/v1/meals

##### Testing: Update the information of a meal option

- PUT: http://localhost:3000/api/v1/meals/id

##### Testing: Remove a meal option

- DEL: http://localhost:3000/api/v1/meals/id

### MENU

```
 {
   id:   int,
   title: 'String',
   date: 'Data',
   list: '[]',
 }

```

##### Testing: Setup the menu for the day

- POST: http://localhost:3000/api/v1/menu

##### Testing: Get the menu for the day

- GET: http://localhost:3000/api/v1/menu

### ORDER

```
 {
   id:   int,
   meal: 'String',
   quantity: 'int',
   delivery_address: 'string',
 }

```

##### Testing: Select the meal option from the menu

- POST: http://localhost:3000/api/v1/order

##### Testing: Modify an order

- PUT: http://localhost:3000/api/v1/order/id

##### Testing: Get all the orders

- GET: http://localhost:3000/api/v1/order

## Limitations

- Application still in progress
- Online Documentation yet to be implement

## Contributing Guide

- Fork the repository
- Make your contributions
- Create a pull request against the develop branch

## Author

Vincent Iroleh
