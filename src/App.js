import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Viewstudent from './Components/Viewstudent'
import Addbooks from './Components/Add'
const Addbooks = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Viewstudent />}></Route>
        <Route path='/add' element={<AddStudent data={{ id: '', name: '', grade: '' }}
          method="post" />} />

        {/* <Route path='/' element={<Addstudent/>}
></Route>   */}
      </Routes>

    </div>
  )
}

export default Addbooks
