import React from 'react';
import { NavLink, Route, Switch,useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FiLogOut } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

// import Sell_crops from './Sell_crops';
import '../style/navbar.css'

function Navbar() {
    const history = useHistory();

    const openhome=()=>{
        history.push('/home');

    }

    // const dara = api.openweathermap.org/data/2.5/weather?zip=232101,91&appid= b47eaedf9047216f8f8ccccb6cf674b5;
    const open_sell_dialog = () => {
        // console.log("hello");
        // <Sell_crops/>

        document.getElementsByClassName("sell_crop_div_at_home_jsx")[0].style.display = "flex";
        // document.getElementsByClassName("form_holder_div")[0].add('open');

    }

    // const logout =(req,res)=>{
    //     console.log(req.cookies.jwtoken);
        
    // }




    return (
        <>

            <div className="header">
                <div className="logo">
                    <img src={require('../images/logo2.png')} alt="logo here" onClick={openhome}/>
                </div>


                <div className="nd_div">



                    <div className="header_right">
                        <li style={{ listStyle: "none" }}>
                            <NavLink exact to="/home"> Home </NavLink>

                            <a href='https://agricoop.nic.in/en/ministry-major-schemes'>Govt plan</a>
                            <NavLink exact to="/About">My Profile</NavLink>
                            <NavLink exact to="/Contactus">Contact Us</NavLink>

                        </li>
                    </div>


                    {/* <div className="buy_sell">
                        <NavLink exact to="/Buy_crops"> <button className='buy'>Buy</button> 
                        </NavLink>
                        <button className='sell' onClick={open_sell_dialog}>Sell</button>
                    
                    </div> */}
                      <NavLink exact to="/About"><div className='my_profile'><CgProfile/></div></NavLink>

                    <div className="logout"> 

                        <NavLink exact to="./logout"><button classname="logout" ><FiLogOut/></button></NavLink>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar;
