import { useEffect } from 'react'
import { useMusic } from './useMusic'

function App() {
  const { music, status } = useMusic()

  useEffect(() => {
    console.log(music, status)
  }, [music, status])

  return (
    <span>what i'm listening</span>
  )
}

export default App
