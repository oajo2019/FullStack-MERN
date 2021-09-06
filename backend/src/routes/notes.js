const { Router } = require('express');
const { getNotes, createNote, updateNotes,
    getNote, updateNote, deleteNote } = require('../controllers/notes.controller.js')
const router = Router();
router.route('/')
    .get(getNotes)
    .post(createNote)
// .put(updateNotes)
// .delete(deleteNotes)
router.route('/:id')
    .get(getNote)
    .post(createNote)
    .put(updateNote)
    .delete(deleteNote)
module.exports = router;