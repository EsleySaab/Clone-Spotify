import { MongoClient } from "mongodb"

const URL =
  "mongodb+srv://esleysan:malvado36@spotify.tbly4.mongodb.net/?retryWrites=true&w=majority&appName=Spotify"

const client = new MongoClient(URL)

export const db = client.db("cloneSpotify")
