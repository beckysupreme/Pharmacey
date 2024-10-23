import logo from './logo.svg';
import './App.css';
import {Sup}  from './component/functionc'
import Becky from './component/class';
import Bec from './component/jsx';
import Parenet from './component/prop';
import Beck from './component/prop';
import State from './component/state';
import Eventhand from './component/eventhand';
import New from './component/new';
import Old from './component/idf';
import Now from './component/array';
import Style from './component/Style';
import Art from './component/array';
import './Appstyle.css';
import Nael from './component/form';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './Path/Home';
import About from './Path/About';
import Contact from './Path/contact';
import Services from './Path/Services';
import LandingPage from './component/landing';
import Footer from './Path/Footer';

function App() {
  return (
    <div className="App">
     <Router>
     <nav>
          <ul className="navbar">
            <li>
              <Link to="/" exact activeClassName="active-link" className="land">Pharmacy</Link>
            </li>
            <li>
              <Link to="/Home" activeClassName="active-link">Home</Link>
            </li>
            <li>
              <Link to="/About" activeClassName="active-link">About</Link>
            </li>
            <li>
              <Link to="/Contact" activeClassName="active-link">Contact</Link>
            </li>
            <li>
              <Link to='/Services' activeClassName="active-link">Services</Link>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
      </Routes>
      <Footer/>
     </Router>
      {/* <h1 className='mon'>Hello everyone</h1> */}
      {/* <Sup></Sup>
      <Becky></Becky> */}   
      {/* <Bec></Bec> */}
      {/* <Beck name="Ema">
        <button>Login</button>
      </Beck> */}
      {/* <State></State> */}
      {/* <Eventhand></Eventhand> */}
      {/* <Old></Old> */}
      {/* <Now></Now> */}
      {/* <New></New> */}
      {/* <Art></Art> */}
      {/* <Style></Style> */}
     {/* <Nael></Nael> */}
    </div>
  );
}

export default App;
