import React from "react";
import './App.css';

import panda from './images/panda.png';

const User = function(props) {
    return(
        <>
          <section className='card'>
            <a><img src={props.image}/></a>

            <div className='content'>
              <a className='author'>{props.username}</a>
            </div>

             <div className='metadatea'>
                <p>Posted on <span className='date'>{props.date}</span></p>
             </div>

             <div className='comments'>
                    <p><i>{props.msg}</i></p>
             </div>
          </section>
        </>
    )
}

export default User;