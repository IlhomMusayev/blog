const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const homeRouter = require('./routers/homeRouter');
const blogRouter = require('./routers/blogRouter');
const addRouter = require('./routers/addRouter');

const app = express()

const hbs = exphbs.create({
    defaultLayout: "main",
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

app.use('/', homeRouter)
app.use('/blogs', blogRouter)
app.use('/add', addRouter)







const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("server running...");
})