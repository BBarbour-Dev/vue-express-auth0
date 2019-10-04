require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');
const checkJwt = require('./auth/checkJwt');

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});
app.get('/api/restricted', checkJwt, (req, res) => {
  res.json({ message: 'Hello from behind a restricted route!' });
});

const staticFileMiddleware = express.static(path.join(__dirname, 'public'));

app.use(staticFileMiddleware);
app.use(history({ disableDotRule: true, verbose: true }));
// Must use twice without the dot rule implemented, as per connect-history-api-fallback documentation.
app.use(staticFileMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
