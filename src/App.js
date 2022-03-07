
import React  from 'react';
import {Routes,Route} from "react-router-dom"
import {DashBoardPage, LoginPage, PageNotFound,Orders,Products,Reviews,Users} from './pages';



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path='/dashboard' element={<DashBoardPage/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path='/Orders' element={<Orders/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Reviews' element={<Reviews/>}/>
        <Route path='/Users' element={<Users/>}/>
      </Routes>
    </>
  )
}

export default App;
