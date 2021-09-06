// el modelo de datos usa un esquema de la libreria mongoose
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true, //esto lo que ahce es quitar espacios extras limpiar
        unique: true
    }
}, {
    timestamps: true
});

module.exports = model('User', userSchema);