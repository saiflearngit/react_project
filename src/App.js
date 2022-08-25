import logo from './logo.svg';
import './App.css';
import Movielist from './component/Movielist';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import Cart from './component/Cart';
import  History  from './component/History';
import './style_files/bodystyle.css'

function App() {
  return (
   // <Movielist></Movielist>
  /* <BrowserRouter>
         <NavLink to="/Movielist">Movielist</NavLink>
         <NavLink to="/History">History</NavLink>

         
         <Routes>
           <Route path='/Movielist' element={<div></div>} />
           <Route path='/History' element={<History></History>} />


         </Routes>
         <Movielist></Movielist>

      </BrowserRouter> */

    <div className="App">
      <Movielist></Movielist>
    </div>
  );
}

export default App;
