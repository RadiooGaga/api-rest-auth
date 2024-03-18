const { generateToken } = require('../../utils/jwt');
const User = require('../models/User')
const bcrypt = require("bcrypt");
const { deleteImgCloudinary } = require('../../utils/deleteFiles');


//registro del usuario (post)
const register = async (req, res, next) => {
    try {
        const newUser = new User(
        {
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email,
            birthday: req.body.birthday,
            rol: "user",
            img: req.body.img
        });

        //recogemos usuario y await hasta que encuentre uno 
        const userExists = await User.findOne({ userName: req.body.userName });
            console.log(userExists)
        
        

        //si el nombre de usuario no existiera...
        if (userExists) {
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
            const token = generateToken(user._id);
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

//update (sólo administradores)
const updateUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, 
            {...req.body, img: req.file ? req.file.path : 'not image'},
            { new: true }).lean();
        console.log('El usuario ha sido actualizado', updatedUser);

        if (req.file){
            updatedUser.img = req.file.path;
            const oldUser = await User.findByIdAndUpdate(id);
            deleteImgCloudinary(oldUser.img);
        }

        return res.status(200).json({user: updatedUser, message: 'Usuario actualizado!'})
        
        } catch (error){

            return res.status(400).json('Error al actualizar el usuario', error) 
        }
}



//delete usuarios (sólo admin)
const deleteUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const userDeleted = await User.findByIdAndDelete(id, 
        {...req.body, img: req.file ? req.file.path : 'not image'},
        { new: true }).lean();

        if (userDeleted.img) {
          deleteImgCloudinary(userDeleted.img);
        }
        return res.status(200).json({ 
        message: '¡Usuario borrado!',
        userDeleted
     });
       
    } catch (error) {
        return res.status(400).json('Error al eliminar el usuario', error);
    }
  };

module.exports = { register, login, getUsers, getUserById, updateUserById, deleteUserById };
