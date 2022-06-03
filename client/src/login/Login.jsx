import React, { useState } from 'react';
// import './login.css'
import { useNavigate, useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';



const Login = () => {
    // const navigate = useNavigate();
    const history = useHistory();

    const [user, setUser] = useState({
        name: "", email: "", password: "", phoneno: "", address: ""
    });
    
    const [login_email, setemail] = useState("");
    const [login_password, setpassword] = useState("");

    // const [login,setlogin]= useState({
    //     login_email:"",login_password:""
    // });

    // we do this so that we able to write on the box of name/email/password/ phoneno whaenever any change in box happen means we type any word this function trigger and take that value and store in the state
    const responseGoogle = async(response) => {
        // console.log("this is response");
        console.log(response);
        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                response
            })
        });
        
        
        // console.log(res);
        if(res.status==203){

            history.push("/Enter_details");
        }
        if(res.status==204){

            history.push("/adminpanel");
        }
        if(res.status==201){
            history.push('/home')
        }
      }


    let name, value;
    const typevalue = (event) => {
        
        // event.target will get that value and store in name/ value  variable
        name = event.target.name
        value = event.target.value

        setUser({ ...user, [name]: value })
    }



    // this function call when we click post/register button-- we get all the value in a varibale we fetch the page .. adn set all its attritubtes like method/header/body and send all the data in a string form to the backend 
    const send_data = async (event) => {
        event.preventDefault();

        //   step=> x+1 =  we get all the value which is  store in usestate using object destructing
        // const { name, email, password, phoneno, address } = user;



        // console.log(user.address);


        // step=> x+2 = we post all the data at server and server will post all the data to backend (in auth.js file at server folder) and check for all the validataion(if any -> we perform all the validataion at auth.js file in server folder) using post method and get the respose code using res variable and perform operation.


        // const res = await fetch("/signup", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"

        //     },
        //     body: JSON.stringify({
        //         name, email, password, address, phoneno
        //     })
        // });

        // console.log(res.status);

        // if (res.status === 400) {
        //     alert("enter all the details")
        // }

        // if (res.status === 422) {
        //     alert("email already exist ")
        // }

        // if (res.status === 200) {
        //     alert("succesfully login")
        // }
    }













    //       --------------------------------->      login details  ---------------------------->

    // getting all the value in the box 

    // const login_type_value = (event)=>{ 
    //     // setemail(event.target.login_email)           // ye galat hai
    //     setpassword(event.target.value)                     // ye sahi hai

    //     // setlogin({...login,[login_email]:login_password})
    // }

    

    const login_user = async (event) => {
        // const {login_email,login_password} = login
        try {
            const res = await fetch("/signin", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify({
                    login_email, login_password
                })


            });


            if (res.status === 200) {
                // i think the below /home directory is that one which is present in login -> Home
                history.push("/home")
            }

            if (res.status === 400) {
                alert("Data not found")
            }
            if (res.status === 402) {
                alert("please fill the data ")
            }
            if (res.status === 404) {
                alert("please fillfffg the data ")
            }

        } catch (error) {
            console.log(error);

        }

    }



    const opacity2 = () => {
        document.getElementsByClassName("st_page")[0].style.zIndex = "8";
        document.getElementsByClassName("st_page")[0].style.opacity = "1";
        document.getElementsByClassName("nd_page")[0].style.zIndex = "3";
        document.getElementsByClassName("nd_page")[0].style.opacity = "0";
    }
    const opacity1 = () => {

        document.getElementsByClassName("st_page")[0].style.zIndex = "1";
        document.getElementsByClassName("st_page")[0].style.opacity = "0";
        document.getElementsByClassName("nd_page")[0].style.opacity = "1";
        document.getElementsByClassName("nd_page")[0].style.zIndex = "10";
    }

    return (
        <div className="main_container">
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
                        <GoogleLogin
                            clientId="897223443783-1bqmg4ifk0id3mvenq5vccpp3b0mhmm1.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />



                        
                        {/* <form action="post">
                            <input type="text" name="name"  id="name" value={user.name} onChange={typevalue} placeholder="Name" required/><br />

                            <input type="email" name="email" id="email" value={user.email} onChange={typevalue} placeholder="Email" /><br />

                            <input type="password" name="password" id="password" value={user.password} onChange={typevalue} placeholder="Password" />
                            
                            <input type="number" name="phoneno" id="phoneno" value={user.phoneno} onChange={typevalue} placeholder="Mobile" />
                            
                            <input type="text" name="address" id="address" value={user.address} onChange={typevalue} placeholder="address" />
                            <br />
                            <button onClick={send_data}> signup</button>

                        </form> */}

                    </div>


                </div>
            </div>
            <div className="nd_page">
                <div className="main_container2">
                    <div className="sign_in">
                        <div className="item3">
                            <h1>Sign in </h1>
                            <input type="email" name="login_email" value={login_email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />

                            <input type="password" name="login_password" value={login_password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
                            <br /><br />
                            <button onClick={login_user}>sign in </button>
                        </div>
                    </div>

                    <div className="hlo_friend">
                        <div className="item4">
                            <h1>Hello friend</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptatem facere quos?
                            </p>

                            <button onClick={opacity2}>sign up</button>


                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Login;
