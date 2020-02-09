const orm = require('../config/orm');

const burger = {
    all: (tableName, cb) => {
        orm.selectAll(tableName, (result) => {
            cb(result);
        })
    },
    insertOne: (tableName, cols, vals, cb) => {
        orm.insertOne(tableName, cols, vals, (result) => {
            cb(result);
        })
    },
    updateOne: (tableName, objref, conditional, cb) => {
        orm.updateOne(tableName, objref, conditional, (result) => {
            cb(result);
        })
    }
};

module.exports = burger;