import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login_page from './components/Login_page'
import Viewmenupage from './components/adminmenu/Viewenupage'
import Menupage from './components/Menupage'
import Adminpage from './components/Adminpage'
import Adddata from './components/adminmenu/Adddata'
import Moditydata from './components/adminmenu/Modifydata'
import Deletedata from './components/adminmenu/Deletedata'
import Admincart from './components/Admincart'
import Usercart from './components/Usercart'
// import './App.css'\

import { Route,Routes } from 'react-router-dom'

function App() {
 

  return (
    <div>
      <Routes>
      <Route path="/" element={<Login_page />} />
      <Route path="/admin" element={<Adminpage />} />
      <Route path="/adminmenu" element={<Viewmenupage/>}/>
      <Route path="/menu/add/" element={<Adddata/>}></Route>
      <Route path="/menu/update/:id" element={<Moditydata/>}></Route>
      <Route path="/menu/delete/:id" element={<Deletedata/>}></Route>
      <Route path="/cart" element={<Admincart/>}></Route>
      <Route path="/user/menu/:cartid" element={<Menupage />} />
      <Route path="/usercart/:cartid" element={<Usercart/>}></Route>
    </Routes>
    </div>
  )
}

export default App
