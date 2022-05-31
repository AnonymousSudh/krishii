import React, { useState } from 'react'
import "../style/sell_crops.css"

function Sell_crops() {

  const [sell_data, set_sell_data] = useState({
    crop_name: "", variety: "", price: "", quantity: ""
  });

  let nameee, valueee;
  const typevaluee = (event) => {
    // event.target will get that value and store in name/ value  variable
    nameee = event.target.name
    // console.log(event.target.name);
    valueee = event.target.value

    set_sell_data({ ...sell_data, [nameee]: valueee })


  }

  const submit_sell_details = async (event) => {
    // console.log("hello");
    event.preventDefault();
    const { crop_name, variety, price, quantity } = sell_data;
    const res = await fetch("/Sell_crops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        crop_name, variety, price, quantity
      })
    });
    console.log(res.status);

    if (res.status === 200) {
      // close_dialog_box();
      // document.getElementsByClassName("contact_form")[0].reset();
      // HTMLFormElement.reset()

      // document.getElementsByClassName("sell_crop_div_at_home_jsx")[0].style.zIndex = "8";
      document.getElementsByClassName("sell_crop_div_at_home_jsx")[0].style.display = "none";
      alert('Data uploaded')
      // console.log(res.body);
    };

    if (res.status === 400) {
      alert("please fill all the data");
    }

  }

  const close_sell_form = () => {

    document.getElementsByClassName("sell_crop_div_at_home_jsx")[0].style.display = "none";
  }






  // const close_dialog_box = () => {
  //   document.getElementsByClassName("sell_crop_div_at_home_jsx")[0].style.display = "none";
  // }


  return (<>
    <div className="main_div">
      <div className="form_holder_div">

        <div className='form_holder'>
          <button className='close_form_btn' onClick={close_sell_form}>cancel</button>
          <form action="POST" name="contact_form">
            <div className='input_fields'>
              <label htmlFor="crop name">Crop name :</label>
              <input type="text" id='crop_name' name='crop_name' value={sell_data.crop_name} onChange={typevaluee} />
            </div>

            <div className='input_fields'>
              <label htmlFor="variety">Variety :</label>
              <input type="text" id='variety' name='variety' value={sell_data.variety} onChange={typevaluee} />
            </div>

            <div className='input_fields'>
              <label htmlFor="price">Price:</label>
              <input type="text" id='price' name='price' value={sell_data.price} onChange={typevaluee} />

       
            </div>

            <div className='input_fields'>
              <label htmlFor="quantity">quantity :</label>
              <input type="text" id='quantity' name='quantity' value={sell_data.quantity} onChange={typevaluee} />

              <select className="weight_unit">
                <option value="kg">k/g</option>
                <option value="ton">Ton</option>
                <option value="man">Man</option>
                {/* <option value="audi" selected>Audi</option> */}
              </select>

            </div>

            <button onClick={submit_sell_details}>submit</button>

          </form>
          {/* <button className='close_dialog_box' onClick={close_dialog_box}>close</button> */}
        </div>
      </div>
    </div>



  </>
  );

}

export default Sell_crops;