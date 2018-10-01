const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const pg = require('pg');
const flash = require('express-flash');
const session = require('express-session');
const routes = require('./routes/index.routes.js');
const regnumFactory = require('./src/regnum.js');

const app = express();
const factory = regnumFactory();
const route = routes(factory);

// const Pool = pg.Pool;

// let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}
// const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/codex';


// const pool = new Pool({
//     connectionString,
//     ssl: useSSL
// });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// app.use(session({
//     secret : "<add a secret string here>",
//     resave: false,
//     saveUninitialized: true
//   }));

//   app.use(flash());

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', route.home)

let PORT = process.env.PORT || 3005;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});
