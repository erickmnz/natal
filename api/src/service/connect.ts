import { MongoClient } from "mongodb";

export default async () => {
    const conn = new MongoClient("mongodb://127.0.0.1:27017/data")
    await conn.connect()
    const db = await conn.db("comment_section_db")
    return db.collection("post")
}