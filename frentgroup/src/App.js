import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Projectref from './pages/Projectref';
import ProductList from './pages/ProductList';
import ProfileAdmin from './pages/ProfileAdmin';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<ProductList/>}/>
        <Route path='/projectref' element={<Projectref/>}/>
        <Route path='/contactus' element={<ContactUs/> }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route element = {<ProtectedRoute/>}>
          <Route path='/profileadmin' element={<ProfileAdmin/>}/> 
        </Route>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;

        