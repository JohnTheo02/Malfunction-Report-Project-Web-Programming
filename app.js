const express = require('express');
const handlebars = require('express-handlebars');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

const SQLiteStore = require('connect-sqlite3')(session); // store for sessions
require('dotenv').config();

const app = express();
const index_router = require('./routes/index.js');

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 2000 * 60 * 60,
        sameSite: true
    },
    store: new SQLiteStore({ db: 'session.sqlite', dir: './model/sessions' })
}));

app.use(flash());

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: require('./controllers/helpers.js'),
}));

app.set('view engine', 'hbs');
app.set('views', './views');

// Middleware για να χειριστεί τα flash μηνύματα και να τα προσθέσει στο res.locals
app.use((req, res, next) => {
    res.locals.success_messages = req.flash('success');
    res.locals.error_messages = req.flash('error');
    next();
});

app.use('/', index_router);

module.exports = app;
