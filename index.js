const express = require('express');
const api = require('./api/api')
const app = express();
const port = 3000;

app.all('/api', api);

app.use(express.static('public'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
