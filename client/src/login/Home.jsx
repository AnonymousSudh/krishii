import React from 'react';
import Navbar from '../components/Navbar';
import '../style/home.css'
import Right_panel from '../components/Right_panel'
import Sell_crops from '../components/Sell_crops';
import { useHistory}  from 'react-router-dom';
import {GoogleLogin,GoogleLogout } from 'react-google-login';

function Home() {
  

  return (
    // <div className='home_div_main'>
    //   <div className="home_ka_div">
    //     <div className="sell_crop_div_at_home_jsx">
    //       <Sell_crops />
    //     </div>
<>
         <Navbar />
    {/* //     <Right_panel /> */}
    <div className='hmain'>
        <div className='main_divv'>
           <h1>Buy or Sell crop sitting at your home</h1>
           <p>With easy interface</p>
        </div>
        <div className='buy_sell'>
          <div className='sell'>Sell</div>
          <div className='buy'>Buy</div>
        </div>
        </div>
        </>
    //   </div>
    // </div>
    )
}

export default Home;
