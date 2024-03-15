const { generateSign } = require('../../utils/jwt');
const User = require('../models/User')
const bcrypt = require("bcrypt");


//registro del usuario (postUser)
const register = async (req, res, next) => {
    try {
        const newUser = new User(
        {
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email,
            birthday: req.body.birthday,
            rol: req.body.rol,
            profileImg: req.body.profileImg
            
        });

        //recogemos usuario y await hasta que encuentre uno 
        const userDuplicated = await User.findOne({ userName: req.body.userName});

        //si el nombre de usuario no existiera...
        if (userDuplicated) {
            return res.status(400).json("Ese nombre de usuario ya existe");
        }

        // el if anterior se lo saltaría y entraría aquí:
        const userSaved = await newUser.save();
        console.log("usuario registrado!")
        return res.status(201).json(userSaved);

    } catch (error) {
        console.log("error al hacer el registro")
        return res.status(400).json(error)
    }
}

 
//login del usuario (post)
const login = async (req, res, next) => {

    try {
        const user = await User.findOne({ userName: req.body.userName}); 

        if (user) {
           if (bcrypt.compareSync(req.body.password, user.password)) {
            //lo que pasa cuando te logueas con jsonwebtoken
            const token = generateSign(user._id);
            return res.status(200).json({ user, token });
            
            } else {
                return res.status(400).json({ error: "El usuario o la contraseña son incorrectos" });
            }
        } else {
            return res.status(400).json({ error: "El usuario o la contraseña son incorrectos" });
        }
       
    } catch (error) {
        console.log("error al hacer login", error);
        return res.status(500).json({ error: "Ocurrió un error al intentar iniciar sesión" })
    }
}

const getUsers = async (req,res,next) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
        
    } catch (error) {
        return res.status(400).json(error)
    }
}

const getUserById = async (req,res,next) => {
    try {
        const { id } = req.params;
        const userById = await User.findById(id);
        return res.status(200).json(userById);
        
    } catch (error) {
        return res.status(400).json(error)
    }
}

const updateUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true }).lean();
        console.log('El usuario ha sido actualizado', updatedUser);
        return res.status(200).json(updatedUser); 
        
        } catch (error){
            return res.status(400).json('Error al actualizar el juego', error) 
        }
}

//delete (sólo administradores)
const deleteUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userDeleted = await User.findByIdAndDelete(id);
        return res.status(200).json({
        message: "Usuario eliminado",
        userDeleted
        });
        
    } catch (error) {
        return res.status(400).json(error);
    }
};




module.exports = { register, login, getUsers, getUserById, updateUserById, deleteUserById };
