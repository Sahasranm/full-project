import SignUp from '../component/SignUp.jsx'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from '../Navbar/Header.jsx'
import Login from '../component/Login.jsx'
function App() {
  return (
   
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path='/' element ={<Login/>}/>
   <Route path="/SignUp" element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>
   
  )
}

export default App
