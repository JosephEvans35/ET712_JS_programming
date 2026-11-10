import './App.css';
import User from './user.js';

import panda from './images/panda.png';
import hacker from './images/hacker.png';
import pikachu from './images/pikachu.png';


function App() {      
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Joseph Evans</h1>
      <main className='container'>
      {/* <User 1 /> */}
      <User image={panda} username="Panda" date="10/10/2023" msg="Bepo, Heart Pirates!!." />
      {/*' <User 2 /> */}
      <User image={hacker} username="Hacker" date="10/11/2023" msg="White Hat" />
      {/* <User 3 /> */}
      <User image={pikachu} username="Pikachu" date="10/12/2023" msg="Pikachu!!!" />
      </main>
    </div>
  );
}

export default App;
