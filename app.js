const express = require('express')
const { json } = require('express/lib/response')


const PORT = process.env.PORT || 5000


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));





app.get('/', function(req, res){
    res.status(200).json({
        message:'Working'
    })
})

require("./routes/main.routes")(app)
require("./routes/age.routes")(app)

app.listen(PORT, function(){
    console.log(`Server has been started ${PORT}`)
})

