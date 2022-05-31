import React from 'react';
import Navbar from '../components/Navbar';
import '../style/home.css'
import Right_panel from '../components/Right_panel'
import Sell_crops from '../components/Sell_crops';
import { useHistory}  from 'react-router-dom';
import {GoogleLogin,GoogleLogout } from 'react-google-login';

function Home() {
  // const history = useHistory();
  // const signout = () => {
  //   var auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log('User signed out.');

  //   });
  // }
  // const { signOut, loaded } = useGoogleLogout({
  //   jsSrc,
  //   onFailure,
  //   clientId,
  //   cookiePolicy,
  //   loginHint,
  //   hostedDomain,
  //   fetchBasicProfile,
  //   discoveryDocs,
  //   uxMode,
  //   redirectUri,
  //   scope,
  //   accessType,
  //   onLogoutSuccess
  // })

// logout = (response) => {
//     console.log(response);
//     let userInfo = {
//       name: "",
//       emailId: "",
//     };
//     this.setState({ userInfo, isLoggedIn: false });
//   };

  return (
    <div className='home_div_main'>
      <div className="home_ka_div">
        <div className="sell_crop_div_at_home_jsx">
          <Sell_crops />
        </div>

        <Navbar />
        <Right_panel />
        <div className='main_divv'>
          <h1>hello this is home page</h1>


          {/* <GoogleLogout
            clientId="897223443783-1bqmg4ifk0id3mvenq5vccpp3b0mhmm1.apps.googleusercontent.com"
            buttonText={"Logout"}
            onLogoutSuccess={logout}
          ></GoogleLogout> */}

          {/* <button onClick={signout}>signout</button> */}
        </div>
      </div>
    </div>)
}

export default Home;
