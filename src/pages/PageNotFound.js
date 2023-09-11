import React from 'react'
import NotFound from '../assets/PageNotFound.jpg' 
import {Link} from 'react-router-dom'

export const PageNotFound = () => {
  return (
      <main>
          <section className='flex flex-col justify-center px-2'>
              <div className='flex flex-col items-center my-4'>
                  <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops!</p>
                  <div className='max-w-lg'>
                     <img className='rounded' src={NotFound} alt="404 Page Not Found" /> 
                  </div>
                  <div className='flex jsutify-center my-4'>
                      <Link to='/'>
                           <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Back to Home
                                </span>
                            </button>
                      </Link>
                  </div>
                </div>
          </section>
    </main>
  )
}
