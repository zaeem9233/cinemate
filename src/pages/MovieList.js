import React from 'react'
import { Card } from '../components/index'

export const MovieList = () => {
  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-center flex-wrap'>

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </section>
    </main>
  )
}