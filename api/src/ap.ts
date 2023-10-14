import express from "express";

export const app = express();

app.get("/api/natal", (req, res) => {
    let date = new Date();
    res.send({
        "natal": `12/25` === `${date.getMonth()}/${date.getDay()}`
    })
})

