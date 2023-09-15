import { useState, useEffect } from 'react'

export const useFetch = (api, queryTerm = '') => {
    const [loading, isLoading] = useState(false)
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${api}?api_key=f744f1312eda1fcfcad1680debc15d38&query=${queryTerm}`
    useEffect(() => {
        async function fetchMovies() {
            isLoading(true)
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results)
            isLoading(false)
        }
        fetchMovies();
    }, [url])
  return {data, loading}
}
  