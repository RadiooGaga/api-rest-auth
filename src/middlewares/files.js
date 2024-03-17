const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
    cloudinary,
    folder: 'games&consoles',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif']
})

const upload = multer({ storage })

const deleteImgCloudinary = (imgUrl) => {

    //----Con los siguientes métodos de JavaScript accederemos a la ruta de la imagen, su nombre, su carpeta y el id con el que se almacena en cloudinary para localizarlo nivel a nivel.
    const imgSplited = imgUrl.split('/')
    const nameSplited = imgSplited[imgSplited.length - 1].split('.')
    const public_id = nameSplited[0];

    //----Con el método destroy localizamos nuestro archivo e imprimimos por callback un console.log indicando que se ha podido destruir correctamente.
    cloudinary.uploader.destroy(public_id, () => {
        console.log('Imagen borrada de cloudinary')
    })
}

const configCloudinary = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        api_key: process.env.CLOUDINARY_API_KEY,
        cloudinary_url: process.env.CLOUDINARY_URL
    })
}

module.exports = { upload, deleteImgCloudinary, configCloudinary }

