const { register, login, deleteUser, updateUser, getUsers, getUserById } = require('../controllers/user');
const { isAdmin } = require('../../middlewares/auth');


const adminRoutes = require('express').Router();

adminRoutes.post('/register', register);
adminRoutes.post('/login', login);
adminRoutes.get('/users', [isAdmin], getUsers);
adminRoutes.get('/:id', [isAdmin], getUserById);
adminRoutes.put('/:id', [isAdmin], updateUser);
adminRoutes.delete(':id', [isAdmin], deleteUser);

module.exports = adminRoutes;