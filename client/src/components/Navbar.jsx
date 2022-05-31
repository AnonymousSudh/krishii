import React from 'react';
import { NavLink, Route, Switch,useHistory } from "react-router-dom";
// import Sell_crops from './Sell_crops';

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




    return (
        <>

            <div className="header">
                <div className="logo">
                    <img src={require('../images/logo.png')} alt="logo here" onClick={openhome}/>
                </div>


                <div className="nd_div">


                    <div className="header_right">
                        <li style={{ listStyle: "none" }}>
                            <NavLink exact to="/home"> Home </NavLink>
                            <NavLink exact to="/Goverment_plan">Govt Plan</NavLink>
                            <NavLink exact to="/About">My Profile</NavLink>
                            <NavLink exact to="/Contactus">Contact Us</NavLink>
                        </li>
                    </div>


                    <div className="buy_sell">
                        <NavLink exact to="/Buy_crops"> <button className='buy'>Buy</button> </NavLink>
                        <button className='sell' onClick={open_sell_dialog}>Sell</button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar;
