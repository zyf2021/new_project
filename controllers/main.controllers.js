//подключение к бд, которой пока нет

exports.generate = (req, res) => {
    try {
        var random_number = 0;
        random_number = Math.floor(Math.random()*100);
        res.send(random_number.toString())
    }
    catch(e) {
        res.status(500).send({message:e.message})
    }
    
}