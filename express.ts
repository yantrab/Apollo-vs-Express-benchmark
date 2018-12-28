// index.ts

import * as express from 'express';
console.log(process.env.NODE_ENV);

const app = express();
const host = 'localhost';
const port = 4000;

app.get('/', (req, res) => {
    res.send('use ' + host + ':' + port + '/test');
})

app.route('/test')
 .post((req, res) => {
    res.json({"data":{"hello":"test"}})
});

app.listen(port, () => {
    console.log('App is running on port ', port);
})