# POC TypeORM

A POC with NestJS and TypeOrm to learn how to connect a postgress db

## Summary

- [POC TypeORM](#poc-typeorm)
  - [Summary](#summary)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
    - [Running the app](#running-the-app)
  - [Running the tests](#running-the-tests)
  - [Built With](#built-with)
  - [Hooks](#hooks)

## Getting Started

First, run the development server:

    $ npm dev

Open http://localhost:3000 with your browser to see the result.

### Prerequisites

    $nvm use
    $npm i

### Installing

A step by step series of examples that tell you how to get a development
env running

Say what the step will be

    $ npm i

### Running the app

    # bd
    docker-compose up

    # development
    $ npm run start

    # watch mode
    $ npm run dev

    # production mode
    $ npm run start:prod

## Running the tests

      $ npm run test

## Built With

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/#/)

## Hooks

We use [Husky](https://github.com/typicode/husky) for ensure the quality and maintenance of the code, we are currently working with two hooks:

    $ pre-commit
    $ pre-push

these scripts will run whenever a new commit and a push are made
