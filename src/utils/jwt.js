const jwt = require("jsonwebtoken");

//crear token (llave)
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: "30w"});
    
}


//comprobar si esa llave fue creada por el cerrajero de confianza
const verifyJwt = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = { generateToken, verifyJwt };