import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

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
        <h1>helllo</h1>
        <div className="otpdiv">

        <input type="password" name="password" id="otp" placeholder="otp" value={otp} onChange={(e)=>{setotp(e.target.value)}} />

         <button onClick={validate_otp}> send otp </button>



        </div>


        </>
    )
}

export default Enterotp