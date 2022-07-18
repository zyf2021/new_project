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
            message:"Укажите минимальное и мааксимальное число"
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
exports.generate_sequence = (req, res) => {
    if(!req.body.sequence_lenght){
        res.status(400).send({
            message:"Укажите длину последовательности"
        });
        return;
    }
    try{
        const min = Number(req.body.min);
        const max = Number(req.body.max);
        const sequence_lenght = req.body.sequence_lenght;
        var random_number = 0;
        var random_number_to_string = "";
        for (var i = 0; i<sequence_lenght; i++){
            random_number = Math.floor(Math.random()*(max-min))+min;
            random_number_to_string = random_number_to_string+" "+random_number.toString();
        }
        res.send(random_number_to_string);
    }
    catch(e){
        res.status(500).send({message:e.message});
    }
}