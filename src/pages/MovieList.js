import React from 'react'
import { Card } from '../components/index'
import { useFetch } from '../hooks/useFetch'

export const MovieList = ({apiPath}) => {

  const { data } = useFetch(apiPath);

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