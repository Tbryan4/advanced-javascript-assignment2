
import EditPage from 'pages/edit/EditPage';
import React  from 'react';
import {Routes,Route} from "react-router-dom"
import {DashBoardPage, LoginPage, PageNotFound,Products,AddNewProductsPage} from './pages';



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path='/dashboard' element={<DashBoardPage/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path='/Orders' element={<PageNotFound/>}/>
        <Route path='/all' element={<Products/>}/>
        <Route path='/Reviews' element={<PageNotFound/>}/>
        <Route path='/Users' element={<PageNotFound/>}/>
        <Route path='/add' element={<AddNewProductsPage/>}/>
        <Route path='/edit' element={<EditPage/>}/>
      </Routes>

      {/* SOME PAGES ARE NOT FINISHED SO THEY ARE PROGRAMMED TO DISPLAY
      THE 404 PAGE IF CLICKED THIS WILL BE CHANGED LATER ON.
      WHEN READY ACTIVATE THE ROUTES BELOW */}

      {/* <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path='/dashboard' element={<DashBoardPage/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path='/Orders' element={<Orders/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Reviews' element={<Reviews/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/AddNewProduct' element={<AddNewProductsPage/>}/>
      </Routes> */}
    </>
  )
}

export default App;
