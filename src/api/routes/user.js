const { isAdmin } = require('../../middlewares/auth');
const { register, login, getUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/user');


const usersRoutes = require('express').Router();

usersRoutes.post('/register', register);
usersRoutes.post('/login', login);
usersRoutes.get('/', [isAdmin], getUsers);
usersRoutes.get('/:id', [isAdmin], getUserById);
usersRoutes.patch('/update/:id', [isAdmin], updateUserById);
usersRoutes.delete('/delete/:id', [isAdmin], deleteUserById);

module.exports = usersRoutes;