import React from 'react'
import { Card } from '../components'
import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export const Search = ({ api }) => {
    //const url = `https://api.themoviedb.org/3/${api}?api_key=f744f1312eda1fcfcad1680debc15d38&query=${queryTerm}`
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get('q');
    const { data: movies } = useFetch(api, queryTerm); 
  return (
      <main>
          <section>
              <p className='text-3xl text-gray-700 dark:text-white'>{ movies.length ===0? `No results found for '${queryTerm}'`: `Results for '${queryTerm}'`}</p>
          </section>
          <section className='max-w-7xl mx-auto py-7'></section>
          <div className='flex justify-center flex-wrap'>
              {movies.map((movie) => (
                  <Card key={movie.id} movie={movie} />
              ))}
          </div>
        </main>
  )
}
   