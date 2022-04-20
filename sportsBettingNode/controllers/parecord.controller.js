const parecordService = require('../services/parecord.service')

module.exports = {
    createPArecord,
    getPArecords,
    getAverages,
    deletePArecord
};


function createPArecord(req, res, next) {
  //TODO: via parecordSerice you should add a PA record and respond to the client confirming that the record was successfully added.

    //console.log('got to parecordcontroller')
    parecordService.addPArecord(req.body, req.user.sub).then(result => {res.send(result)})
        .catch(err => {next(err)});
}

function getPArecords(req,res,next){
//TODO: return all parecords from the database and send to the client.
    parecordService.getAllPArecords(req.query.username).then(records => res.json(records))
        .catch(err => next(err));
    }

function getAverages(req,res,next){
    parecordService.getAverages().then(records => res.json(records))
        .catch(err => next(err));
}

function deletePArecord(req,res,next){

//TODO: delete parecord from the database and respond to the client by conforming the action.
    // console.log('got to controller');
    parecordService.deletePArecord(req.params.date, req.user.sub).then(result => {res.send(result)})
        .catch(err => next(err));

}
