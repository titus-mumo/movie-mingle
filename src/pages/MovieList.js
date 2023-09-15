import { Card } from '../components'
import { useFetch } from '../hooks/useFetch'

export const MovieList = ({ api }) => {
    const { data: movies , loading } = useFetch(api)

  return (
      <main>
          <section className='max-w-7xl mx-auto py-7'>
          {loading ? <p className='dark:text-white text-lg'>Loading data...</p> :
            <div className='flex justify-start flex-wrap other:justify-evenly'>
              {movies.map((movie) => (
                  <Card key={movie.id} movie={movie} />
              ))}
            </div>
          }
            </section>
        </main>
  )
}
