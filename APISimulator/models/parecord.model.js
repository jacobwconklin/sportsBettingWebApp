//THIS will be used once we connect MongoDB   console.log("UnauthorizedError req:",req.url);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//https://mongoosejs.com/docs/populate.html#populate_an_existing_mongoose_document


//TODO: notice that the goals are missing from this schema.
const schema = new Schema({
    calories: { type: Number, required: true },
    minutes: { type: Number, required: true },
    steps: { type: Number, required: true },
    activityType: { type: Number, required: true, default: 1 },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    createdByUsername: {type: String},
    createdDate: { type: Date, default: Date.now },
    exerciseDate: {type: Date, default: Date.now }
    });

schema.index({createdDate:1, createdBy:1}, { unique: true });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('PArecord', schema);


