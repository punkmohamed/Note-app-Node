import noteModel from "../../../database/models/note.model.js";


const getAllNote = async (req, res) => {
    let notes = await noteModel.find().select(" title description -_id createdBy").populate({
        path: "createdBy",
        select: "name email -_id"
    })
    res.json({ message: "success", notes })
}

const addNotes = async (req, res) => {
    let addedNote = await noteModel.insertMany(req.body)

    res.json({ message: "success", addedNote })
}

export {
    getAllNote,
    addNotes

}