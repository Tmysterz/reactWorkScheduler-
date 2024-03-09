const { Schema } = require('mongoose');

const scheduleSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    startTime: {
        type: Number
    },
    endTime: {
        type: Number,
    },
});

module.exports = scheduleSchema;