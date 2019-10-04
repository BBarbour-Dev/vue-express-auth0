# vue-express-auth0

This app I created to experiment with using Auth0 on the front end and back end, to secure my SPA routes and also my api routes. Most of it I followed the examples found in the Auth0 doucmentation. It turned out to be wa

I plan to use this as a boilerplate for future apps I build myself. You are welcome to use it that way as well. However, there are a few important caveats that I will cover about how it's configured.

## Getting Started

`npm install` inside of both the client and server folders, as they have separate node_modules and packages.

## Server/Client

Vue.js files into a public directory within the server folder. The app will be served from express from there.

When running dev, the front end runs on localhost:8080 through a webpack dev server. The express server runs on localhost:5000.

For development, under client: `npm run serve`. Under server run 'npm run dev'

To deploy make sure to `npm run build` in the client folder. It will create a public dir inside of the server folder with the static files and assets.

There's a proxy setup through vue.config.js that redirects to localhost:5000, to simulate how things work during production.

Hititng the /api/restricted route with a token provided by the Auth0 client puts it through the Auth0 middleware before resolving the endpoint logic.

## Auth0 Config

You will need to create an app and an api in your Auth0 dashboard to get the settings. Read through the Quick Start for Vue.js as that's what I used to make this example.

I would add http://localhost:8080, and http://localhost:5000 to your callback, allowed web origins, and logout URLs.

## Env Variables

I created two .env files, one in the client folder and other in the server folder.

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
