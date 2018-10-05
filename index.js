const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const pg = require('pg');
const app = express();
const flash = require('express-flash');
const session = require('express-session');
const routes = require('./routes/index.routes.js');
const regnumFactory = require('./src/regnum.js');
const dbfactory = require('./src/db-factory.js');

const Pool = pg.Pool;

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}

// const connectionString = process.env.DATABASE_URL || 'postgresql://psql:pg123@localhost:5432/reg_numbers';
const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/reg_numbers';
// const connectionString = process.env.DATABASE_URL || 'postgresql://nachobits:1997@localhost:5432/reg_numbers';

const pool = new Pool({
    connectionString,
    ssl: useSSL
});

const db = dbfactory(pool);
const factory = regnumFactory(db);
const route = routes(factory, db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(session({
    secret: '<add a secret string here>',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    helpers: {
        'selector':
        function () {
            if (this.selected) {
                return 'selected';
            }
        }
    }
}));

app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', route.home);
app.get('/:city', route.home);
app.post('/registration-number', route.regNum);
app.post('/delete/:reg', route.deleter);
app.post('/reset', route.reset);
app.post('/location', route.filter);

let PORT = process.env.PORT || 3005;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});
