import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
require("../style/signup.css")
// import useState from 
// const nodemailer = require("nodemailer");

function Signup() {


    const [user, setuser] = useState({
        name: "", email: "", password: "", phoneno: "", address: ""
    });
    const history = useHistory();
    const { name, email, password, phoneno, address } = user;

    const [otp, setotp] = useState("");

    // const typevalue=(e)=>{
    //     console.log(e.target.value);
    //     setuser([address]:e.target.value)

    // }


    const typevalue = (event) => {
        let namee, value;

        // event.target will get that value and store in name/ value  variable
        namee = event.target.name
        value = event.target.value

        setuser({ ...user, [namee]: value })
    }
    const send_data = async (event) => {


        event.preventDefault();
        const res = await fetch("/signup_email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                name, email, password, address, phoneno
            })
        });

        console.log(res.status);

        if (res.status == 400) {
            alert("enter all the details")
        }

        if (res.status == 422) {
            alert("email already exist ")
        }

        if (res.status == 201) {

            history.push("./enterotp");


        }

    }

    // const validate_data = async (event) => {
    //     event.preventDefault();
    //     const res = await fetch("/validate_data", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"

    //         },
    //         body: JSON.stringify({
    //             otp
    //         })
    //     });
    //     if (res.status == 201) {
    //         alert("you have been succesfully login");
    //     }
    //     if (res.status == 401) {
    //         alert("wrong otp")
    //     }
    // }



    return (
        <>
        
        <div className='main-head'>
            <div className="login-box">
                <div className="left">

                    <h1>Sign up</h1>

                    <form action="post">
                        <input type="text" name="name" id="name" value={user.name} onChange={typevalue} placeholder="Name" required /><br />

                        <input type="email" name="email" id="email" value={user.email} onChange={typevalue} placeholder="Email" /><br />

                        {/* <input type="number" name="otp" id="otp" value={otp} onChange={(e) => { setotp(e.target.value) }} placeholder="otp" /><br /> */}

                        <input type="password" name="password" id="password" value={user.password} onChange={typevalue} placeholder="Password" />

                        <input type="number" name="phoneno" id="phoneno" value={user.phoneno} onChange={typevalue} placeholder="Mobile" />

                        <input type="text" name="address" id="address" value={user.address} onChange={typevalue} placeholder="address" />
                        <br />
                        <button onClick={send_data}> signup</button>
                        {/* <button onClick={validate_data}> send otp </button> */}




                    </form>
                </div>

                <div className="right">
                    <span className="loginwith">Sign in with</span>


                    <button className="social-signin google">Log in with Google+</button>
                </div>
                <div className="or">OR</div>
            </div>
        </div>








        </>
    )
}

export default Signup;





































{/*     
              <div className='st_page'>
                <div className="welcome_back">
                    <div className="item">
                        <h1>welcome Back</h1>
                        <p>if you already have aacount please <br></br>
                            login keep connectd with us
                        </p>

                        <button onClick={opacity1}>sign in</button>
                    </div>
                </div>

                <div className="sign_up">
                    <div className="item2">

                        <h1>create account </h1>
                        <form action="post">
                            <input type="text" name="name" id="name" value={user.name} onChange={typevalue} placeholder="Name" /><br />
                            <input type="email" name="email" id="email" value={user.email} onChange={typevalue} placeholder="Email" /><br />
                            <input type="password" name="password" id="password" value={user.password} onChange={typevalue} placeholder="Password" />
                            <input type="number" name="phoneno" id="phoneno" value={user.phoneno} onChange={typevalue} placeholder="Mobile" />
                            <br />
                            <button onClick={send_data}> signup</button>

                        </form>

                    </div>


                </div>
            </div> */}

// </>;
// }

// export default Signup;
