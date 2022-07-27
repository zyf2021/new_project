exports.calc_age_by_date_birth = (req, res) => {
    if (!req.body.date_birth){
        res.status(400).send({
            message:"Укажите дату рождения"
        });
        return;
    }
    try {
        var date_birth = new Date(req.body.date_birth);
        var current_date = new Date();
        var age = current_date - date_birth;//обработка для будующей даты
        console.log(Math.floor(age/1000/60/60/24/365));///1000/60/60/24/365
        res.send(age.toString());
    }
    catch(e){
        res.status(500).send({message:e.message});
    }
}
exports.calc_difference_between_ages = (req, res) => {
    if ((!req.body.date_birth_1)&&(!req.body.date_birth_2)){
        res.status(400).send({
            message: "Укажите даты рождения"
        });
        return;
    }
    try{
        var date_birth_1 = new Date(req.body.date_birth_1);
        var date_birth_2 = new Date(req.body.date_birth_2);
        var difference_between_ages_ms = Math.floor(Math.abs(date_birth_1.getTime() - date_birth_2.getTime())/1000/60/60/24/365);
        
        res.send(difference_between_ages_ms.toString());

    }   
    catch(e){
        res.status(500).send({message:e.message})
    }
}