import React, { useEffect, useState } from 'react'
// import router from '../../../server/router/sellauth'
import '../style/buy_crop.css'


const Buy_crops =() => {

  const getallselldata = async()=>{

    const res = await fetch('/getallcropdata',{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-type":"application/json"
        
      },
      Credential:"include"
      
    })
  }

useEffect(()=>{
  getallselldata();

})

  
  return (
    <>
 
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

{/* 
              {variety_dataa.map((val) => {
                if (val.variety == exactdata) {
                  return (
                    <>
                      <tr>
                        <td>{val.crop_name}</td>
                        <td>{val.variety}</td>
                        <td>{val.quantity}</td>
                        <td>{val.price}</td>
                        <td>{val.}</td>
                      </tr>
                    </>
                  )
                }
              })} */}


            </table>
          </div>
        </div>
    </>
  )
}

export default Buy_crops


