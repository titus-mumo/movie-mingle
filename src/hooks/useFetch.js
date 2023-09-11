import { useState, useEffect } from 'react'

export const useFetch = (api, queryTerm='') => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${api}?api_key=f744f1312eda1fcfcad1680debc15d38&query=${queryTerm}`
    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results)
        }
        fetchMovies();
    }, [url])
  return {data}
}
  