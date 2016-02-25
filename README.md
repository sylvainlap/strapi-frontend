# strapi-frontend

A boilerplate to create a frontend for [Strapi](http://strapi.io/).

## TODO

errorMessage must be a reducer (cf real world example)
create the signup page & flow
look other boilerplates (mern, starters kits...) to see the CRUD actions structure
remove middlewares ?

## Contains

- [x] [Webpack](https://webpack.github.io)
- [x] [Babel](https://babeljs.io/)
- [x] [ESLint](http://eslint.org/)
- [x] [React](https://facebook.github.io/react/)
- [x] [React Router](https://github.com/reactjs/react-router)
- [x] [Redux](https://github.com/reactjs/redux)
- [x] [React Router Redux](https://github.com/reactjs/react-router-redux)
- [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
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

# The API (Strapi) part

In order for this boilerplate to work, you have to configure your Strapi backend to have the 'api' prefix.

Moreover, you have to create a Message endpoint, with a GET public route, and a POST / PUT / DELETE authenticated route.

# License

MIT
