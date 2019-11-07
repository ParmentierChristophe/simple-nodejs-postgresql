# simple-nodejs-postgresql
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Plokkke"><img src="https://avatars1.githubusercontent.com/u/51399514?v=4" width="100px;" alt="Antoine Caron"/><br /><sub><b>Antoine Caron</b></sub></a><br /><a href="https://github.com/ParmentierChristophe/simple-nodejs-postgresql/commits?author=Plokkke" title="Code">💻</a> <a href="#ideas-Plokkke" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ParmentierChristophe/simple-nodejs-postgresql/pulls?q=is%3Apr+reviewed-by%3APlokkke" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!