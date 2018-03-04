const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express(),
    cfg = require('./config'),
    posts = require('./posts');

mongoose.connect(cfg.dbConnectUrl);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(errorMiddleware);

app.get('/', (req, res) => res.send({version: require('./package').version}));
app.post('/register', (req, res) => res.json({success: 'register'}));
app.get('/login', (req, res) => res.json({success: 'login'}));

app.use('/posts', posts);

app.listen(3000, () => console.info('Listening on http://127.0.0.1:3000'));

function errorMiddleware(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.stack)
}