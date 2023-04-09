import Song from '@/components/Song'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const userApiUrl = "http://localhost:3000/api/spotify/user"
  const playlistApiUrl = "http://localhost:3000/api/spotify/playlist"

  const [selectedPlaylist, setSelectedPlaylist] = useState(null)

  // Obtenemos la información del usuario
  const getUserData = async () => {
    const response = await fetch(userApiUrl)
    const data = await response.json()
    console.log(data)
  }

  // Obtenemos la información de la playlist seleccionada por defecto
  const getPlaylistData = async () => {
    const response = await fetch(playlistApiUrl)
    const data = await response.json()
    console.log(data)

    setSelectedPlaylist(data)
  }

  useEffect(() => {
    getUserData()
    getPlaylistData()
  }, [])


  return (
    <main className='p-10'>
      {/* Contenido de la página Dashboard */}

      {/* USUARIO */}
      <div className='mb-4'>Usuario...</div>

      {/* PLAYLISTS */}
      <div className='mb-4'>Playlists...</div>

      {/* CANCIONES PLAYLIST SELECCIONADA */}
      {/* Tiene que haber una forma mejor de hacer componentes condicionales que no sea encadenando ternarias */}
      {selectedPlaylist ? (
          <>
            <div className='mb-4'>Playlist seleccionada y sus canciones...</div>
            {selectedPlaylist.tracks ? (
              <div className='flex flex-col gap-2'>
                {selectedPlaylist.tracks.items.map((track, index) => {
                  return (
                    <Song songData={track.track} songIndex={index}/>
                  )
                })}
              </div>
            ) : (<></>)}
          </>) : (<></>)}
    </main>
  )
}
