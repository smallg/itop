const user = {
    insert: 'insert into user(name, age, gender, status) values(?, ?, ?, ?)',
    getUsers: 'select * from user where status = 1',
    getUserById: ''
};

module.exports = user;