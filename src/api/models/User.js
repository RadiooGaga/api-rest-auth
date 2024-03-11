const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
    userName:  { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true, unique: true },
    email: { type: String, trim: true, required: true, unique: true },
    birthday: { type: Number, trim: true, required: true },
    rol: { type: String, trim: true, required: true },
    profileImg: { type: String, trim: true, required: true }

    }, 
    {
    timestamps: true,
    collection: "videogame-users"
    });

//antes de que se guarde, cogerá la contraseña y la igualará a otra cosa. 
//La contraseña encriptada 10 veces.
userSchema.pre('save', function() {
    this.password = bcrypt.hashSync(this.password, 10);
})

const User = mongoose.model("users-videogames", userSchema, "videogame-users");
module.exports = User;