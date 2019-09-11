let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let db = require('../config/db');
let user = require('../config/user');
let connection = mysql.createConnection(db.mysql);

/* GET users listing. */
router.get('/', function (req, res) {
    connection.query(user.getUsers, '', (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});

router.post('/', function (req, res) {
    const params = req.body;
    const userObj = [params.name, params.age, params.gender, '1'];
    connection.query(user.insert, userObj, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});

module.exports = router;
