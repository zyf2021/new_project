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
        var age = current_date - date_birth;
        console.log(age/1000/60/60/24/365);

    }
    catch(e){
        res.status(500).send({message:e.message});
    }

}