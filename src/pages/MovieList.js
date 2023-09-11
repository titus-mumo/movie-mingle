import { Card } from '../components'
import { useFetch } from '../hooks/useFetch'

export const MovieList = ({ api }) => {
    const { data: movies } = useFetch(api)

  return (
      <main>
          <section className='max-w-7xl mx-auto py-7'></section>
          <div className='flex justify-start flex-wrap other:justify-evenly'>
              {movies.map((movie) => (
                  <Card key={movie.id} movie={movie} />
              ))}
          </div>
        </main>
  )
}
