const { Router } = require('express');
const { getUser, createUser, deleteUser } = require('../controllers/users.controller');
const router = Router();
router.route('/')
    .get(getUser) //consultar
    .post(createUser) // guardar datos
router.route('/:id') //id es una variable
    //     .put() // actualizar datos
    .delete(deleteUser) //eliminar
module.exports = router;