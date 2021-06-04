import { useQuery } from 'react-query'

type Music = {
  cover: string
  name: string
  artist: string
  url: string
  background: string
}

type Data = {
  item: {
    artists: Array<{ name: string }>
    name: string
    album: {
      images: Array<{ url: string }>
    }
    external_urls: {
      spotify: string
    }
  }
}

async function fetchCurrentMusicPlaying () {
  const result = await fetch('/.netlify/functions/hello')
  const data: Data = await result.json()

  return {
    artist: data.item.artists[0].name,
    background: data.item.album.images[0].url,
    cover: data.item.album.images[1].url,
    name: data.item.name,
    url: data.item.external_urls.spotify,
  }
}

export function useMusic () {
  const { data, status } = useQuery<unknown, unknown, Music>('fetch-current-playing', () => fetchCurrentMusicPlaying())

  return {
    music: data as Music,
    status,
  }
}
