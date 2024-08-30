import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Menu from './pages/Menu';
import Deals from './pages/Deals';
import Cart from './pages/Cart';
import Sidebar from './component/Sidebar';
import Amenu from './Admin/Amenu';

import Menuadd from './addon/Menuadd';
import Admin from './Admin/Admin';
import Edit from './Admin/Edit';
import Usign from './pages/Usign';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/deals' element={<Deals/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/amenu' element={<Amenu/>}/>
      <Route path='/admin' element={<Admin/>}/>
        <Route path='/menuadd' element={<Menuadd/>}/>
        <Route path='/edit/:id' element={<Edit/>} loader={({params})=>fetch(`http://localhost:5500/product/${params.id}`)}/>
        <Route path='/usign' element={<Usign/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
