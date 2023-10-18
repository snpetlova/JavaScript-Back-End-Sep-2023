const { MongooseError } = require('mongoose');

exports.extractErrorMessages = (error) => {
    const isInstanceOfMongoose = error instanceof MongooseError;

    if (isInstanceOfMongoose) {
        const errors = Object.values(error.errors);
        const msgs = error.map((e) => e.message);
        return msgs;
    }

    return [error.message];
}