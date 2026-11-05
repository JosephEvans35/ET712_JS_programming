import logo from './logo.svg';
import './App.css';
import imgdog from './image/dog.jpg'
import Navbars from './components/navbars'
import Home from './components/home'
import Contact from './components/contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  const username = "user123"
  return (<>
    <div className="App">
      <BrowserRouter>
      <Navbars />
      <Route>
        <Route path = '/' element = {<Home />} />
        <Route path = 'contact' element = {<Contact />} />
      </Route>
      </BrowserRouter>
    </div>

      <div className="App">
      <h1 style= {{color: "darkblue", textAlign: "center"}}>Joseph Evans</h1>
      <h2>Welcome to React JS</h2>
      <p> Embedded veriable</p>
      <p>{username} user has id number {10+5}</p>

      <figure>
        <img src ={imgdog} />
      </figure>
    </div>
    </>
  );
}

export default App;
