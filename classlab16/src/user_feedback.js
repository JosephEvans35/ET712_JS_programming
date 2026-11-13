import React from "react";
import './App.css';
import ModalWindow from './modal_window.js';

const User_feedback = function(props) {
    // Function to open the modal window
    const openmodalwindow = () => {
        const modalwindow = document.querySelector('.modalwindow')


        //set the username for the modal window when the user clicked
        const modalusername = document.querySelector('.modalusername')
        modalusername.innerHTML = `for <i>${props.username}</i>`
                  
        
        modalwindow.style.display = 'block'
        }

        
    return(
        <>
          <div className='feedbackcontainer'>
            <section className='feedbackcard'>
                <div className='content'>
                    <p>{props.username}</p>
                    </div>

                    <div className='description'>
                        {props.children}
                    </div>

                    <div className='cardfooter' onClick={openmodalwindow}>
                        <p>
                            <span>&#10011;</span>
                            Add Feedback
                        </p>
                    </div>
            </section>
          </div>

          {/** Modal window */}
          <ModalWindow />
        </>
    )
}

export default User_feedback;