const { register, login, getUsers, getUserById, /*editUserById,*/ updateUserById, deleteUserById } = require('../controllers/user');
const { isAdmin } = require('../../middlewares/auth');
const  upload = require('../../middlewares/files');

const usersRoutes = require('express').Router();

usersRoutes.post('/register', register);
usersRoutes.post('/login', login);
usersRoutes.get('/', [isAdmin], getUsers);
usersRoutes.get('/:id', [isAdmin], getUserById);
usersRoutes.put('/update/:id', [isAdmin], upload.single('img'), updateUserById);
usersRoutes.delete('/delete/:id', [isAdmin], upload.single('img'), deleteUserById);

module.exports = usersRoutes;