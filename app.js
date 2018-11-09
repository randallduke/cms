const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

//connect to database
mongoose.connect('mongodb://localhost:27017/cms', {useNewUrlParser: true}).then((db)=>{

    console.log('MONGO connected');

}).catch(error=> console.log("DB Connection Failed" + error));


//dynamic paths
app.use(express.static(path.join(__dirname, 'public')));

//Set View engine
app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//load routes
const home = require('./routes/home/index');
const admin = require('./routes/admin/index');
const posts = require('./routes/admin/posts');


//use routes
app.use('/', home);
app.use('/admin', admin);
app.use('/admin/posts', posts);

app.listen(4500, ()=>{

console.log(`listening on port 4500`);

});