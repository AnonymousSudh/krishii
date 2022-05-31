import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../style/extra_info.css'



const Extra_information = () => {

    const history = useHistory();

    const [phoneno, setphoneno] = useState("");
    const [address, setaddress] = useState("");

    // const trail = async () => {


    //     // console.log("this hopefully will be the email");
    //     // console.log(ress);
    // }
    // useEffect(()=>{
    //     trail();
    // },[]);
    const show_home = async (q) => {
        const usertype = document.getElementById("usertpye").value;
        // console.log(usertype);
        try {

            const res = await fetch("/Enter_details", {
                method: "POST",
                headers: {
                    // Accept: "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    phoneno, address, usertype
                })
            });

            if (res.status == 201) {
                history.push('/home')
                // alert("hello");

            }
        } catch (error) {
            console.log(error);

        }


    }

    return (
        <>
            <div className="extra_info_main_div">
                <div className="extra_div_container">
                    <div className="ex_phone">

                        <h1>Enter the phone no .</h1>
                        <input type="number" placeholder='enter Phone no' name="phoneno"
                            value={phoneno} onChange={(e) => setphoneno(e.target.value)}
                        />
                    </div>
                    <div className="ex_address">
                        <h1>Enter the address</h1>
                        <input type="text" placeholder='address' value={address} onChange={(e) => setaddress(e.target.value)} />
                    </div>
                    {/* 
                    <div className="ex_type">
                        <h1>Are you Buyer or seller</h1>
                        <input type="text" placeholder='buyer/seller' value={usertype} onChange={(e) => setusertype(e.target.value)} />
                    </div> */}
                    <div className="ex_type">

                        <label htmlFor="usertype" >choose user type</label>
                        <select name="usertype" id="usertpye">
                            <option disabled hidden selected>select</option>
                            <option value="buyer">buyer</option>
                            <option value="seller">seller</option>
                        </select>
                    </div>
                    <button className='ex_proceed' onClick={show_home}>proceed</button>
                </div>

            </div>

        </>
    )
}

export default Extra_information;