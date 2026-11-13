import './App.css';
import User from './user.js';

import panda from './images/panda.png';
import hacker from './images/hacker.png';
import pikachu from './images/pikachu.png';
import UserFeedback from './user_feedback.js';


function App() {      
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Joseph Evans</h1>
      
      <main className='container'>
        {/* <User 1 /> */}
      <UserFeedback username="Pikachu">
        <User image={pikachu} username="Pikachu" date="10/12/2023" msg="Pikachu!!!" />
      </UserFeedback>

        {/*' <User 2 /> */}
        <UserFeedback username="Panda"> 
          <User image={panda} username="Panda" date="10/10/2023" msg="Bepo, Heart Pirates!!." />
        </UserFeedback>

       {/* <User 3 /> */}
        <UserFeedback username="Hacker"> 
          <User image={hacker} username="Hacker" date="10/11/2023" msg="White Hat" />
        </UserFeedback>
        </main> 

        {/** Post Comments */}
        <section className='postcomments'>
          <ul className='commentlist'>
            <li>testing</li>
          </ul>
        </section>


    </div>
  );

}

export default App;
