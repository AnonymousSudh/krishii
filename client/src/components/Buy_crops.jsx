import React, { useEffect, useState } from 'react'
import '../style/buy_crop.css'


const Buy_crops = () => {

  const [crop_data, getcrop_data] = useState([]);
  const [variety_data, getvariety_dataa] = useState([]);

  const show_data = () => {

  }

  const buycrops = async (e) => {

    // const crop_name = document.getElementById("crop_name").value;
    // console.log(crop_name);

    try {
      const res = await fetch('/Buy_crops', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      });

      const ress = await fetch('/Buy_crops2', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      });


      const data = await res.json();
      console.log(data.cropname);
      getcrop_data(data.cropname);



      // if (2==3) {

      //   // console.log(crop_name);

      //   const response = await fetch("/Buy_crops", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json"

      //     },
      //     body: JSON.stringify({
      //       crop_name
      //     })
      //   });
      // }
      // document.getElementsByClassName("showdata")[0].innerHTML = data[9].crop_name
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    buycrops();
  }, []);

  return (
    <>
      <div className='dd'>Buy_crops</div>

      <div className="select_all_crop">
        <div className="select_crop">

          <label htmlFor="crop">crop</label>
          <select name="crop" id="crop_name">
            {crop_data.map((val) => {
              return (
                <>
                  <option disabled hidden selected>select the crop name</option>
                  <option value={val}>{val}</option>
                </>
              )
            })}
          </select>
        </div>

        <div className="select_variety">
          <label htmlFor="variety">select variety</label>

          {/* <select name="variety" id="variety_name">
            { }
            <option disabled hidden selected> choose varity</option>
            <option value={ }></option>
          </select> */}
        </div>
      </div>

      <button className='showdata' onClick={buycrops}>show data</button>
      {/* <div className='showDataa'>
        <div className="tabledata">

          <table >
   
              <tr>
                <th>Crop Name</th>
                <th>Variety</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
          
              {dataa.map((val) => {
                return (
                  <tr>
                    <td>{ val}</td>
                    <td>{val }</td>
                    <td>{ val}</td>
                    <td>{ val}</td>
                  </tr>
                )
              })}

     
          </table>
        </div>
      </div> */}
    </>
  )
}

export default Buy_crops