const axios = require('axios')

const refresh_token = process.env.TANG
const authorization = process.env.GUARDINHA

async function getCurrentPlaying ({ access_token })  {
  const { data } = await axios.get('https://api.spotify.com/v1/me/player/currently-playing?market=BR', { headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${access_token}`
  } }).catch(err => console.log({ err }))

  return data
}

async function getTokenAccess() {
  const { data } = await axios.post(
    'https://accounts.spotify.com/api/token',
    new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
    {
      headers: {
        Authorization: `Basic ${authorization}`
      }
    }
  )

  return data
}

async function handler() {
  return getTokenAccess().then(getCurrentPlaying).then(response => {
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
  })
}

exports.handler = handler
