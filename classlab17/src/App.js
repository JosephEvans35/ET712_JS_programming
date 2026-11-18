import { useState } from 'react';
import './App.css';

function App() {
  const messages = [
    "I think, therefore I am",
    "I have a dream",
    "The only thing we have to fear is fear itself"
  ];

  const [counter, setCounter] = useState(1);

  return (
    <div className='App'>
      <h1 className='title'>Slice by Joseph Evans</h1>
      <section className='slicewrappr'>
        <div className='numberwrapper'>
          <div className={counter === 1 ? "active" : ""}><p>1</p></div>
          <div className={counter === 2 ? "active" : ""}><p>2</p></div>
          <div className={counter === 3 ? "active" : ""}><p>3</p></div>
        </div>

        <p className='msg'><em style={{ "color": 'orangered' }}>{messages[counter - 1]}</em></p>
        <div className='btngroup'>
          <button onClick={() => { if (counter > 1) setCounter(counter - 1); }}>Previous</button>
          <button onClick={() => { if (counter < messages.length) setCounter(counter + 1); }}>Next</button>
        </div>
      </section>
    </div>
  );
}

export default App;
