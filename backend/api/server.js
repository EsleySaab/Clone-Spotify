import express from "express"
import cors from "cors"
import { db } from "./connect.js"
import path from "path"

const __dirname = path.resolve()
const app = express()
const PORT = 3000

app.use(cors())

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'")
})

app.get("/api/artists", async (request, response) => {
  try {
    const artists = await db.collection("artists").find({}).toArray()
    response.json(artists)
  } catch (error) {
    response.status(500).json({ error: "Erro ao buscar artistas" })
  }
})

app.get("/api/songs", async (request, response) => {
  try {
    const songs = await db.collection("songs").find({}).toArray()
    response.json(songs)
  } catch (error) {
    response.status(500).json({ error: "Erro ao buscar músicas" })
  }
})

app.use(express.static(path.join(__dirname, "../../frontend/dist")))

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "../../frontend/dist/index.html"))
})

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`)
})
