const db = require('../_helpers/database');
const PArecord = db.PArecord;
const User = db.User;


module.exports = {
    getAllPArecords,
    getAverages,
    addPArecord,
    deletePArecord
}


//TODO: write the necessary functions that will address the needs of parecord.controller. Hint: look at the signatures in the module.exports. Hint2: look at user.service to see how you can interact with the database. Hint3: look at the class material.

async function getAllPArecords(username){
    let recs = await PArecord.find({createdByUsername: username});
    // console.log(recs);
    return await PArecord.find({createdByUsername: username});
}

async function getAverages(){
    let result = new Array();
    let allUsers = await User.find({});
    // console.log('all users are: ' + allUsers);
    for(const user in allUsers)
    {
        // console.log('current user in for loop is: ' + allUsers[user]);
        let userPARecords = await PArecord.find({createdByUsername: allUsers[user].username});
        let avgMinutes =  0;
        let avgCalories = 0;
        if (userPARecords.length > 0)
        {
            for (const rec in userPARecords)
            {
                avgMinutes += userPARecords[rec].minutes;
                avgCalories += userPARecords[rec].calories;
            }
            // console.log('avgMinutes so far is ' + avgMinutes);
            let newRankingEntity = {
                calorieGoal: allUsers[user].caloriegoal,
                minuteGoal: allUsers[user].minutegoal,
                avgCalories: Math.floor(avgCalories / userPARecords.length),
                avgMinutes: Math.floor(avgMinutes / userPARecords.length),
                username: allUsers[user].username,
                first: allUsers[user].firstName,
                last: allUsers[user].lastName
            };
            // console.log('ranking entity is: ' + newRankingEntity);
            // console.log('ranking entity avgMins is: ' + newRankingEntity.avgMinutes);
            result.push(newRankingEntity);
        }
    }
    // console.log(result);
    return result;
}

async function deletePArecord(date, id){

    // console.log('delete id is: ' + id + 'and date is: ' + date);
    //let user = await User.findOne({_id: id});
    //console.log('got past findone');
    return await PArecord.deleteOne({createdDate: date, createdBy: id})

    /*
    const rec = await PArecord.findOne({createdDate: date});

    if (rec.username !== username)
    {
        throw 'Unauthorized deletion'
    }
    else
    {
        return await PArecord.remove({})
    }
    */

}


async function addPArecord(parecord, id) {
    // console.log(parecord);
    // validate
    //console.log('id is: ' + id);
    let user = await User.findOne({_id: id});
    // console.log('user is: ' + user);
    //console.log('users username is: ' + user.username);
    if (await PArecord.findOne({ createdBy: id, createdDate: parecord.createdDate  })) {
        // We are just updating an existing record
        await PArecord.updateOne({ createdBy: id, createdDate: parecord.createdDate  }, {minutes: parecord.minutes,
            calories: parecord.calories, activityType: parecord.activityType});
        await dbrecord.save();
        return

        //return await User.updateOne({_id: id._id}, {caloriegoal: values.caloriegoal, minutegoal: values.minutegoal});
    }
    else if(!user){
        throw 'Error with the user submitting the request. User information missing. Malformed request.';
    }
    // populate missing fields in the brand new parecord object
    let newrecord= parecord;
    parecord.createdBy = user;
    parecord.createdByUsername = user.username;
    dbrecord = new PArecord(newrecord);
    // console.log(dbrecord);

    // save the record
    await dbrecord.save();

}
