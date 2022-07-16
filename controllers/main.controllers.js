//подключение к бд, которой пока нет

exports.generate = (req, res) => {
    try {
        var random_number = 0;
        random_number = Math.floor(Math.random()*100);
        res.send(random_number.toString());
    }
    catch(e) {
        res.status(500).send({message:e.message});
    }  
}

exports.generate_between = (req, res) => {
    if ((!req.body.min)&&(!req.body.max)){
        res.status(400).send({
            message:"Content empty!"
        })
        return;
    }
    try {
        const min = Number(req.body.min);
        const max = Number(req.body.max);
        var random_number = 0;
        random_number = Math.floor(Math.random()*(max-min))+min;
        res.send(random_number.toString());
    }
    catch(e){
      res.status(500).send({message:e.message});
    }
}