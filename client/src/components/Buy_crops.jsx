import React, { useEffect, useState } from 'react'
import '../style/buy_crop.css'


const Buy_crops = () => {

  const [crop_data, getcrop_data] = useState([]);
  const [variety_dataa, getvariety_dataa] = useState([]);
  const [exactdata, getextactdata] = useState([]);
  // const [datta, getdatta] = useState([]);

  const variety_name = "";
  // const fetch_variety = () => {

  const fetch_distinct_variety = async () => {

    const crop_name = document.getElementById("crop_name").value;
    console.log(crop_name);
    // console.log(valuee);

    const variety_data = await fetch('./crop_value', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        crop_name
      })
    });

    const varietyy_data = await variety_data.json();
    // const xxy = varietyy_data.variety;
    // console.log(xxy);

    getvariety_dataa(varietyy_data);
    console.log(variety_dataa);
    // console.log(varietyy_data);

  }


  // const hello=()=>{
  //   console.log(variety_dataa);
  // }
  // }

  // step -> 1 fetching distinct crop 

  const fetch_distinct_crops = async (e) => {
    try {
      const crop_name = await fetch('/Buy_crops', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        },
        credentials: "include"
      });

      const data = await crop_name.json();
      // console.log(data.cropname);
      getcrop_data(data.cropname);



    }
    catch (error) {
      console.log(error);
    }
  }




  const fetchdata = async () => {

    const variety_name = document.getElementById('variety_name').value;

    getextactdata(variety_name);


    // console.log(variety_dataa);




  }





  useEffect(() => {
    // fetch_distinct_variety();
    fetch_distinct_crops();
  }, []);

  return (
    <>
      <div className='dd'>

        <h1>Buy_crops</h1>

        <div className="select_all_crop">
          <div className="select_crop">

            <label htmlFor="crop">crop </label>
            <select name="crop" id="crop_name" onChange={fetch_distinct_crops}>
              {crop_data.map((val) => {
                return (
                  <>
                    <option disabled hidden selected>select the crop name</option>
                    <option value={val} >{val}</option>
                  </>
                )
              })}
            </select>

            <button className='helllo' onClick={fetch_distinct_variety}>send </button>
          </div>

          <div className="select_variety">
            <label htmlFor="variety">select variety </label>
            {/* <button onClick={hello}>click me</button> */}

            <select name="variety" id="variety_name">
              {variety_dataa.map((val) => {
                return (
                  <>
                    <option disabled hidden selected> choose varity </option>
                    <option value={val.variety}>{val.variety}</option>
                  </>
                )
              })}
            </select>

          </div>
          <button onClick={fetchdata}>fetch data</button>
        </div>


        {/* <button className='showdata' onClick={fetchcrops}>show data</button> */}
        <div className='showDataa'>
          <div className="tabledata">

            <table >

              <tr>
                <th>Crop Name</th>
                <th>Variety</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>seller name </th>
                <th>contact</th>

              </tr>


              {variety_dataa.map((val) => {
                if (val.variety == exactdata) {
                  return (
                    <>
                      <tr>
                        <td>{val.crop_name}</td>
                        <td>{val.variety}</td>
                        <td>{val.quantity}</td>
                        <td>{val.price}</td>
                        {/* <td>{val.}</td> */}
                      </tr>
                    </>
                  )
                }
              })}

              {/* {variety_dataa.map((val) => {
              return (
                <tr>
                  <td>{val.crop_name}</td>
                  <td>{val.variety}</td>
                  <td>{val.quantity}</td>
                  <td>{val.price}</td>
                </tr>
              )
            })} */}


            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Buy_crops




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














          // console.log(variety_data);
    // const variety = variety_data.variety;
    // console.log(sendcropvalue.json());
    // console.log(valuee);

    // valuee.map((val)=>{
    //   console.log(val.variety);
    // })