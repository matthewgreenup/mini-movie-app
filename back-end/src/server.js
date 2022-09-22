const app = require('./index.js');
const port = 8080;

app.listen(port, () =>
  console.log(`Express server is listening on port ${port}`)
);
