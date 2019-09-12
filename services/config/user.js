const user = {
    insert: 'insert into user(name, age, gender, status, email, phone, pwd) values(?, ?, ?, ?, ?, ?, ?)',
    getUsers: 'select * from user where status = 1',
    getUserById: '',
    getUserByEmailOrPhone: 'select * from user where email=? and pwd=?'
};

module.exports = user;