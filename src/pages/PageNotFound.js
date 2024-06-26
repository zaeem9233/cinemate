import React from 'react'
import PageNotFoundImage from '../assets/images/pagenotfound.png'
import { Link } from 'react-router-dom'
import { Button } from '../components'

export const PageNotFound = () => {
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-gray-50 '>404, Ooops!</p>
          <div className='max-w-lg'>
            <img className='rounded shadow-sm' src={PageNotFoundImage} alt="Page Not Found Image" />
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to="/">
            <Button children='Back to Cinemate' />
          </Link>
        </div>
      </section>
    </main>
  )
}
