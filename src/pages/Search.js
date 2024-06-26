import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card } from '../components/index'
import { useFetch } from '../hooks/useFetch'
import { useTitle } from '../hooks'

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams(); 
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  const pageTitle = useTitle(`Serach result for ${queryTerm} - Cinemate`);

  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>
          { movies && movies.length === 0 ? `No result found for '${ queryTerm }'` :  `Result for '${ queryTerm }'` }
        </p>
      </section>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-center flex-wrap'>

          { movies && movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }

        </div>
      </section>
    </main>
  )
}
