import React from "react";
import './App.css';

const ModalWindow = function() {
    // Function to close the modal window
    const closemodalwindow = () => {
        const modalwindow = document.querySelector('.modalwindow')
            modalwindow.style.display = 'none'
        }

        // Function to post the comment 
    const collectcomment = () => {
        let commentarea = document.querySelector('.commentarea')
        const commentlist = document.querySelector('.commentlist')
        const modalusername = document.querySelector('.modalusername').textContent
        const postedate = new Date().toLocaleDateString()

        /** append comment to list */
        commentlist.innerHTML += `<li><i><b>${modalusername}</b></i>: -- ${commentarea.value} \t Posted on ${postedate}</li>`

        /**Clear the comment area */
        commentarea.value =""

        /** Close the modal window */
        document.querySelector('.modalwindow').style.display = 'none'



     }

     return(<>
     {/* Modal window */}
     <section className='modalwindow'>
        <div className='modalcontent'>
            <header className='modalheader'>
                <p>
                    Add Feedback <span className='modalusername'></span>
                </p>
                <p className='closemodal' onClick={closemodalwindow}>&#x58;</p>
            </header>

            <main className='modalbody'>
                <input className='commentarea' type="text" placeholder='Type your comments...'/>
                <button className='btnpostfeedback' onClick={collectcomment}>Post Feedback</button>

            </main>
         </div>
        </section>
    </>) 
};

export default ModalWindow