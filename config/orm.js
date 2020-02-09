const connection = require('./connection');

//get question marks for values
function printQuestionMarks(num) {
    let arr = [];

    for(let i=0; i< num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToString(obj) {
    const arr = [];

    for(let key in obj) {
        let objVal = obj[key];

        arr.push(key + "=" + objVal);
    }
    return arr.toString();
}

const orm = {
    selectAll: (tableName, cb) => {
        const query = "SELECT * FROM " + tableName + ";";
        connection.query(query, (err, results) => {
            if(err) throw err;
            cb(results);
        })
    }, 
    insertOne: (tableName, cols, vals, cb) => {
        let query = "INSERT INTO " + tableName + "(";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";

        connection.query(query, vals, (err, result) => {
            if(err) throw err;
            cb(result);
        });
    },
    updateOne: (tableName, objColVals, condition, cb) => {
        let query = "UPDATE " + tableName + " SET ";
        query += objToString(objColVals);
        query += " WHERE " + condition;

        connection.query(query, (err, result) => {
            if(err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;