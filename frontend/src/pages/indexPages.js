import { Routes, Route, Navigate } from 'react-router-dom'

import PrivateRoute from '../components/Private'
import Add from './Add'
import List from './List'
import Cart from './Cart'



const indexPages = () => {
  return (
    <Routes>
      <Route path="/list" element={<List />} />
      <Route path='/add' element={
        <PrivateRoute>
            <Add />
        </PrivateRoute>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Navigate to="/list" />} />
    </Routes>
  )
}

export default indexPages