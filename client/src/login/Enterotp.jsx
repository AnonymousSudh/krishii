import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
require("../style/Enterotp.css")

function Enterotp() {

    const [ otp , setotp ]= useState("");
    const history = useHistory();


        const validate_otp = async (event) => {
        event.preventDefault();
        const res = await fetch("/validate_otp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                otp
            })
        });
        if (res.status == 201) {

            alert("you have been succesfully login");
            history.push("./home")
        }
        if (res.status == 401) {
            alert("wrong otp")
        }
    }

    return (
        
        <>
        <div className="otpdiv">
        <div className='main_box'>
            
         <div className="box">
             <h1 className='otp_h'>Enter Otp</h1>
             <div className='otp_field'>
                 <input type="text" maxLength={1}/>
                 <input type="text" maxLength={1}/>
                 <input type="text" maxLength={1}/>
                 <input type="text" maxLength={1}/>
             </div>
             
        {/* <input type="password" name="password" id="otp" placeholder="otp" value={otp} onChange={(e)=>{setotp(e.target.value)}} />

         <button onClick={validate_otp}> send otp </button> */}

         </div>
             </div>

        </div>


        </>
    )
}

export default Enterotp