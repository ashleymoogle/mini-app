import express from 'express'
import router from './router'
import bodyParser from 'body-parser'

const app = express();

const port = process.env.port || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api', router);

app.listen(port);

console.log('Magic happens on port ' + port);