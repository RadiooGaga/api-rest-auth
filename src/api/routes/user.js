<<<<<<< HEAD
const { isAdmin } = require('../../middlewares/auth');
const { register, login, getUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/user');
=======
const { register, login, getUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/user');
const { isAdmin } = require('../../middlewares/auth');
const { upload } = require('../../middlewares/files');

>>>>>>> 9ca499a (first commit)


const usersRoutes = require('express').Router();

usersRoutes.post('/register', register);
usersRoutes.post('/login', login);
usersRoutes.get('/', [isAdmin], getUsers);
usersRoutes.get('/:id', [isAdmin], getUserById);
<<<<<<< HEAD
usersRoutes.patch('/update/:id', [isAdmin], updateUserById);
=======
usersRoutes.patch('/update/:id', [isAdmin], upload.single('img'), updateUserById);
>>>>>>> 9ca499a (first commit)
usersRoutes.delete('/delete/:id', [isAdmin], deleteUserById);

module.exports = usersRoutes;