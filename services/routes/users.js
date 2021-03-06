let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let db = require('../config/db');
let user = require('../config/user');
const crypto = require("crypto");
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
    let md5 = crypto.createHash("md5");
    params.pwd = md5.update(params.pwd).digest('hex');
    const userObj = [params.name, params.age, params.gender, '1', params.email, params.phone, params.pwd];
    connection.query(user.insert, userObj, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});

module.exports = router;
