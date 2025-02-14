import { Header } from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Artists } from "./pages/Artists"
import { ArtistPage } from "./pages/Artist-page"
import { Song } from "./pages/Songs"
import { SongPage } from "./pages/Song-page"

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/songs" element={<Song />} />
          <Route path="/song/:id" element={<SongPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
