import React from 'react'
import Logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-400">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <NavLink to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinemate</span>
                </NavLink>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link to="/" className="hover:underline me-4 md:me-6">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies/popular" className="hover:underline me-4 md:me-6">Popular</Link>
                    </li>
                    <li>
                        <Link to="/movies/top" className="hover:underline me-4 md:me-6">Top Rated</Link>
                    </li>
                    <li>
                        <Link to="/movies/upcoming" className="hover:underline">Upcoming</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Cinemate™</a>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}
