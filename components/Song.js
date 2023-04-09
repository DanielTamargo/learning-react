export default function Song({ songData }) {

  console.log(songData)

  return (
    <div className="bg-main-dark rounded p-4 text-white
    transition-[transform] duration-200 ease-in-out
    hover:scale-101">
      <h3 className="text-xl font-bold">{songData.name}</h3>
      <p>Artists: 
        {
          songData.artists.map((artist, index) => {
            return (
              <>
                {index > 0 ? ', ' : ''}
                <a target="_blank" className="text-main-success ms-1 hover:underline" href={artist.external_urls.spotify}>{artist.name}</a>
              </>
            )
          })
        }
      </p>
      <a target="_blank" className="block text-sm text-gray-300 hover:text-gray-500 active:text-gray-50" href={songData.album.external_urls.spotify}>{songData.album.name}</a>
      {/* <img src={songData.preview_url}/> */}
    </div>
  )
}