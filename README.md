# strapi-frontend

A boilerplate to create a frontend for [Strapi](http://strapi.io/).

## TODO

- [ ] protect createMessage route (react-router-tuto ? router auth flow ? react-redux ? high order component ?)
- [ ] redirect after message creation

## Contains

- [x] [Webpack](https://webpack.github.io)
- [x] [Babel](https://babeljs.io/)
- [x] [ESLint](http://eslint.org/)
- [x] [React](https://facebook.github.io/react/)
- [x] [React Router](https://github.com/reactjs/react-router)
- [x] [Redux](https://github.com/reactjs/redux)
- [x] [React Router Redux](https://github.com/reactjs/react-router-redux)
- [x] [JWT auth](https://jwt.io/)
- [x] [Bootstrap](http://getbootstrap.com/)

## Setup

```
$ npm install
```

## Running

```
$ npm start
```
## Lint

```
$ npm run lint
```

## Build

```
$ npm run build
```

## Installation with Strapi

```
$ strapi new project
$ cd project
$ strapi generate api message title:string content:string tags:string
$ cp <path of strapi-frontend>/static/* ./public
```

# License

MIT
