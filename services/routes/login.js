let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let db = require('../config/db');
let user = require('../config/user');
const crypto = require("crypto");
let connection = mysql.createConnection(db.mysql);

/* GET users listing. */
router.get('/', function (req, res) {
    const params = req.query;
    let md5 = crypto.createHash("md5");
    let newPwd = md5.update(params.pwd).digest('hex');
    const userObj = [params.username, newPwd];
    connection.query(user.getUserByEmailOrPhone, userObj, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});

module.exports = router;
