# simple-nodejs-postgresql

This is a boilerplate to build a starting API with Node.js, Express and PostgreSQL on ES6. It is also configured with babel.

- [simple-nodejs-postgresql](#simple-nodejs-postgresql)
  - [Introduction](#introduction)
    - [Development mode](#development-mode)
  - [Quick Start](#quick-start)
  - [Documentation](#documentation)
    - [Folder Structure](#folder-structure)
    - [Babel](#babel)
    - [Nodemon](#nodemon)
    - [Express](#express)
    - [PostgreSQL](#postgresql)
    - [Sequelize](#sequelize)

## Introduction

This is a starting application for create an API with a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/), using [PostgreSQL](https://www.postgresql.org/) for database and [Sequelize](https://sequelize.org) as ORM.

### Development mode

The server side Express code will be served by a node server using [Nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

## Quick Start

```bash
# Clone the repository
git clone git@github.com:ParmentierChristophe/simple-nodejs-postgresql.git

or

git clone https://github.com/ParmentierChristophe/simple-nodejs-postgresql.git

# Go inside the directory
cd simple-nodejs-postgresql

# Install dependencies
yarn (or npm install)

# Start development server
yarn dev (or npm run dev)

```

## Documentation

### Folder Structure

the entrance of the application is `index.js`, on folder `database` All files created by Sequelize (migrations, seeds, models, config) and on folder `server` all files for API and for server (config, modules, controllers, middlewares).

### Babel

### Nodemon

### Express

### PostgreSQL

### Sequelize
