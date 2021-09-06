
//se define un objeto para delclara las funciones 
const notesCtrl = {};
// se importa el modelo
const Note = require('../models/Note');
//consulta notas
notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);

}
//guarda nota no pasar la nota.
//http://localhost:3000/api/notes
notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    console.log(newNote);
    console.log(req.body);
    await newNote.save();
    res.json({ message: "note saved" })
};
//consultar una nota
//http://localhost:3000/api/notes/611a54cf360075130a8cc00d
notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note)
}
// eliminar una nota por id
notesCtrl.deleteNote = async (req, res) => {
    await Note.findOneAndDelete({ _id: req.params.id });
    res.send('Note deleted')
}
// notesCtrl.updateNotes = (req, res) => res.send('put - Notes routes')

// actualiza notas 
// http://localhost:3000/api/notes/611a629d6c01cf1f9580b689
notesCtrl.updateNote = async (req, res) => {
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate({ _id: req.params.id }, {
        title,
        content,
        author
    })
    res.send({ message: 'update note' })
}

module.exports = notesCtrl;