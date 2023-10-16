import express from "express"
import connect from "../service/connect"
const router = express.Router()

router.get("/natal", (req, res) => {
    const date = new Date()
    res.send({
        "natal": `12/25` === `${date.getMonth()}/${date.getDay()}`
    })
})
router.get("/comments", async (req, res) => {
    const col = await connect()
    const comments = await col.find({}).toArray()
    if (comments.length === 0) {
        return res.json("No comments yet")
    }
    return res.json(comments)
})
router.post("/comments/new", async (req, res) => {
    if (!req.body.name || !req.body.post) {
        return res.send("Name or post invalid.")
    }
    const col = await connect()
    const comment = await col.insertOne({ name: req.body.name, post: req.body.post })
    return res.json(comment)
})
export default router