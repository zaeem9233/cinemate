import React, { useEffect } from 'react'
import { Card } from '../components/index'
import { useFetch, useTitle } from '../hooks'

export const MovieList = ({apiPath, title}) => {
  const { data } = useFetch(apiPath);
  const pageTitle = useTitle(`${title} - Cinemate`);
 

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap other:justify-evenly'>

          { data.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }

        </div>
      </section>
    </main>
  )
}