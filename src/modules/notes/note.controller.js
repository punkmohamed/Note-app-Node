import jwt from "jsonwebtoken";
import noteModel from "../../../database/models/note.model.js";

const getAllNote = async (req, res) => {
    let notes = await noteModel.find({ createdBy: req.user.id }).select(" title description -_id createdBy").populate({
        path: "createdBy",
        select: "name email -_id"
    })
    res.json({ message: "success", notes })
}

const addNotes = async (req, res) => {
    req.body.createdBy = req.user.id;
    let addedNote = await noteModel.insertMany(req.body)
    res.json({ message: "success", addedNote })
}

const updateNotes = async (req, res) => {
    let updateNote = await noteModel.findOneAndUpdate({ _id: req.params.id, createdBy: req.user.id }, { title: "okay" }, { new: true })
    updateNote && res.status(200).json({ message: "success update succesfuly", updateNote })
    !updateNote && res.status(404).json({ message: "note not found" })
}

export {
    getAllNote,
    addNotes,
    updateNotes

}