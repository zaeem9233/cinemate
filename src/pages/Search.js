import React from 'react'
import { Card } from '../components/index'
import { useFetch } from '../hooks/useFetch'

export const Search = () => {
  const { data } = useFetch(apiPath);

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-center flex-wrap'>

          { data.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }

        </div>
      </section>
    </main>
  )
}
