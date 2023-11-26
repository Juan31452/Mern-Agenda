import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<h1>Home Page</h1>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/logout' element={<Register/>} />
      <Route path='/perfil' element={<h1>Perfil</h1>}/>
      <Route path='/register' element={<h1>Register</h1>}/>
      <Route path='/adddiary' element={<h1>Add Diary</h1>}/>
      <Route path='/diary' element={<h1>Diary</h1>}/>
      <Route path='/deletediary' element={<h1>Delete Diary</h1>}/> 
      <Route path='/updatediary' element={<h1>Update Diary</h1>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
