import Head from "next/head";
import {useCallback, useRef, useState} from 'react'

import Header from "../components/Header";
import Results from "../components/Results";
import requests from "../service/requests";

export default function Search() {
  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndpoint = (query) => `/api/search?q=${query}`

  return (
      <div ref = {searchRef}><Head><title>Netflux<
          /title>
              <meta name="description" content="Generated by create next app" />
      <link rel = "icon" href = "/favicon.ico" />
      </Head>
        
            <Header />

      <div className = "container mx-auto">
      <label htmlFor = "search" className =
           "block text-lg font-medium text-white">
          Search<
              /label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="focus:ring-red-500 focus:border-red-500 block w-full pl-7 pr-12 sm:text-sm text-black border-gray-300 rounded-md"
                    placeholder="Seach by title"
                  />
      </div>
            </div>

      <Results results = { results } />
  
        </div>)
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request =
      await fetch(`https://api.themoviedb.org/3${
                      requests[genre]?.url || requests.fetchTrending.url}`)
          .then((res) => res.json());

  return {
    props : {
      results : request.results,
    }
  };
}