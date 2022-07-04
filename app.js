const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { json } = require('express/lib/response')

const db = require("./models")

const PORT = process.env.PORT || 5000

var corsOptions = {
    origin:`http://localhost:5001`
}

const app = express()

global.__basedir = __dirname;

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//db.sequelize.sync()


app.get('/', function(req, res){
    res.status(200).json({
        message:'Working'
    })
})

require("./routes/uploads.routes")(app)
require("./routes/applic.routes")(app)
require("./routes/auth.routes")(app);
require("./routes/authors.routes")(app)
require("./routes/books.routes")(app)
require("./routes/bookmarks.router")(app)
require("./routes/collections.routes")(app)
require("./routes/genres.routes")(app)
require("./routes/news.routes")(app)
require("./routes/publishings.routes")(app)
require("./routes/readBooks.routes")(app)
require("./routes/rewiews.routes")(app)
require("./routes/series.routes")(app)
require("./routes/statuses.routes")(app)
require("./routes/tegs.routes")(app)
require("./routes/types.routes")(app)
require("./routes/users.routes")(app)


app.listen(PORT, function(){
    console.log(`Server has been started ${PORT}`)
})

