import React from 'react'
import Navbar from './Navbar'
import { SearchInfo } from './SearchInfo'
import StudentInfo from './StudentInfo'

const MainWindow = () => {
  return (
    <div className='flex flex-col w-full pl-3'>
        <Navbar />
        <SearchInfo />
        <StudentInfo />
    </div>
  )
}

export default MainWindow