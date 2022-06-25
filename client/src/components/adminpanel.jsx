import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// impor useHistory

function Adminpanel() {

  const [crop_namee, set_crop_name] = useState("");
  const [variety_name, set_variety_name] = useState("");

  const history = useHistory();

  const submit_sell_details = async (event) => {
    event.preventDefault();
    // console.log(crop_namee);
    // console.log(variety_name);

    const uploadcrop = await fetch("/Uploadcrop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        crop_namee, variety_name
      })
    });
    console.log(uploadcrop.status);


  }

  const logout =()=>{
    history.push("/");
  }

  return (
    <>

      <div>adminpanel</div>

      <div>

        <form action="POST" name="contact_form">

          <div className='input_fields'>
            <label htmlFor="crop name">Crop name :</label>
            <input type="text" id='crop_name' name='crop_name' value={crop_namee}
            // onChange={(e) => setphoneno(e.target.value)}
              onChange={(e) => { set_crop_name(e.target.value) }} />
          </div>

          <div className='input_fields'>
            <label htmlFor="variety">Variety :</label>
            <input type="text" id='variety' name='variety' value={variety_name} onChange={(e) => { set_variety_name(e.target.value) }} />
          </div>



          <button onClick={submit_sell_details}>submit</button>

        </form>
      </div>

      <button onClick={logout}>logout</button>
    </>

  )
}

export default Adminpanel