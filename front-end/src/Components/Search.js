import React, { useState, useContext } from 'react'
import { AppContext } from '../App'

export const Search = () => {
  const {searchText, setSearchText} = useContext(AppContext)
  let inputHandler = event => {

    if (event.key === 'Enter') {
      console.log('Enter Key Pressed', searchText)
      event.preventDefault()
    }
  }

  return (
    <>
      <div>
        {/* <label htmlFor='searchbox' classname="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500">Search by Movie Name</label>
        <br /> */}
        <div className='justify-items-center mt-10 mx-20'>
        <input
          type='text'
          id='searchbox'
          name='searchbox'
          onKeyPress={inputHandler}
          onChange={e => {setSearchText(e.target.value)}}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search by Movie Name"
        ></input>
        </div>
      </div>
    </>
  )
}
