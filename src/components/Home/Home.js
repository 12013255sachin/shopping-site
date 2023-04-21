import React from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import video2 from '../img-assets/video2.mp4';

const Home = () => {
    function removeOverlay() {
        document.getElementById('overlay-home').style.display = 'none';
    }
    return (
        <>
        <div id="overlay-home" onClick={() => {removeOverlay()}}>
                    <div>Click/Tap anywhere to Turn ON the Shoping Page!</div>
                </div>
            <div className="home1">  
                <h1>Welcome to the home page!</h1>
            </div>
            <div className='image'>
                  
                {/* <Link to="/cart">
                    <img className='img2' src="https://i.ibb.co/wsBWtwx/Shop-Now.png"  width={1410} height={600}></img>
                    </Link> */}
                    <div className='video'>
                        <video autoPlay loop muted>
                            <source src={video2} type="video/mp4" width={1400} height={500} />
                        </video>
                        </div>
                         <Link to="/cart">
                    
                    <div className="button1">
                            <button className="btn btn-lg btn-danger">Continue Shopping</button>
                        </div>
                     </Link>
                

            </div>
            {/* <div className="copyright">
                    <p>Made with &hearts;</p>
                    <a style={{color: 'white', textDecoration: 'none', textAlign:'center'}} target='_blank'
                     href="https://github.com/kirankumari202">&copy; kirankumari202(Kiran kumari)</a>
                     <a style={{color: 'white', textDecoration:'none', textAlign:'center'}}
                     target='_blank' href='https://github.com/kirankumari202'>&copy;kiran's github</a>
                    
                </div> */}
                <div className='footer'>
                    
                </div>
        </>
    )
    }

export default Home;