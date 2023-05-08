import './App.css';
import Navbar from './Components/Header/Navbar';
import Maincom from './Components/Home/Maincom';
import NewNabar from './Components/NewNabar/NewNabar';
import Footer from './Components/Footer/footer';
import SignUp from './Components/Signup_sign/SignUp';
import Sing_in from './Components/Signup_sign/Sing_in';
import {Routes,Route} from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Buynow from './Components/Buynow/buynow';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <NewNabar/>
     
      <Routes>
        <Route path="/" element={<Maincom/>}/>
        <Route path="/login" element={<Sing_in/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/getproductsone/:id" element={<Cart/>}/>
        <Route path="/Buynow" element={<Buynow/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
