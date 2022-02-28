
import React  from 'react';
import {Routes,Route} from "react-router-dom"
import {DashBoardPage, LoginPage, PageNotFound} from './pages';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path='/dashboard' element={<DashBoardPage/>}/>
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

export default App;
