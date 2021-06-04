import { useMusic } from './useMusic'
import { ReactComponent as Headphone } from './headphones.svg'

function App() {
  const { music, status } = useMusic()

  if (status === 'loading') {
    return (
      <main className="h-screen bg-green-100 grid place-items-center">
        <Headphone className="w-24 h-24 animate-bounce" title="loading" />
      </main>
    )
  }

  if (!['loading', 'success'].includes(status) || !music) {
    return (
      <main className="h-screen bg-green-100 grid place-items-center">
        <span className="text-green-400 font-black select-none">i am not listening</span>
      </main>
    )
  }

  return (
    <main className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${music?.background})` }}>
      <section className="h-screen w-screen grid place-items-center p-6" style={{ backdropFilter: 'blur(1rem)' }}>
        <article className="bg-white bg-opacity-60 p-4 rounded-md shadow-2xl sm:flex sm:flex-row sm:max-w-2xl">
          <img src={music.cover} alt={music.name} className="shadow-md rounded-md w-full sm:w-60 sm:mb-0" />
          <div className="flex flex-col justify-between py-6 sm:py-0 sm:px-6">
            <hgroup className="space-y-2">
              <h1 className="text-2xl font-black text-gray-700">{music?.name}</h1>
              <h2 className="text-lg text-gray-700">artist <strong>{music.artist}</strong></h2>
            </hgroup>
            <a href={music.url} className="block mt-6 text-center bg-green-500 p-4 w-full rounded-md font-bold transition-shadow sm:mt-0 shadow-sm hover:shadow-2xl">listen on spotify</a>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
