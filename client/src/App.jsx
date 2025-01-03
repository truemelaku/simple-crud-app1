
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Createusers from './Createusers';
import Users from './Users';
import UpdateUsers from './UpdateUsers';

function App() {


  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Users/> }></Route>
    <Route path='/create' element={<Createusers />}></Route>
    <Route path='/update/:id' element={<UpdateUsers />}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
