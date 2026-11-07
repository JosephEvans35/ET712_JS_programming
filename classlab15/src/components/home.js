import React from 'react'
import imdog from '../images/imgdog.jpg'

const Home = function(){
    return(<>
    <hearder className = "hearder">
        <h1 className = "heardertitle">Homepage</h1>
        </hearder>

        <main className = "maincontainer">
            <div>
                <img src = {imgdog} />
            </div>
            </main>
        </>
    )
}
export default Home;