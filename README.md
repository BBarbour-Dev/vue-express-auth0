# vue-express-auth0

This app I created to experiment with using Auth0 on the front end and back end, to secure my SPA routes and also my api routes. For most of it, I followed the examples found in the Auth0 doucmentation. It turned out to be inuitive.

I plan to use this as a boilerplate for future apps I build myself. You are welcome to use it that way as well. However, there are a few important caveats that I will cover about how it's configured.

## Getting Started

`npm install` in the root folder and then the `client` folder, as they have separate node_modules and packages.

To run the dev environment run `npm run client-dev` in one terminal and `npm run server-dev` in another terminal.

## Server/Client

When running the dev environment, the client runs on `localhost:8080` on a webpack server, which bundles your Vue files and hot module reloads. The express server runs on `localhost:5000`, which provides the `/api` routes. It is being monitored and watched by `nodemon` and will reload after changes too.

There's a proxy setup through `vue.config.js` that redirects to `localhost:5000`, to simulate how things work during production.

To deploy make sure to `npm run build`, which runs the build script in the client folder. It will create a `public` directory inside of the server folder with the static files and assets.

`npm run start` will fire up the production app.

Hititng the`/api/restricted` route with a token provided by the Auth0 client puts it through the Auth0 middleware before resolving the endpoint logic. That's how you use Auth0 to seucre your api routes.

## Auth0 Config

You will need to create an app and an api in your Auth0 dashboard to get the settings. Read through the Quick Start for Vue.js as that's what I used to make this example.

I would add http://localhost:8080, and http://localhost:5000 to your callback, allowed web origins, and logout URLs.

## Env Variables

There are two `.env` files, one in the `client` folder with the VUE*APP* vars and other in the root folder for server vars.

### Server

```
AUTH0DOMAIN= *get info from Auth0 dashboard*
AUTH0AUDIENCE= *get info from Auth0 dashboard*
```

### Client

```
VUE_APP_AUTH0DOMAIN= *get info from Auth0 dashboard*
VUE_APP_AUTH0CLIENTID= *get info from Auth0 dashboard*
VUE_APP_AUTH0AUDIENCE= *get info from Auth0 dashboard*
```
