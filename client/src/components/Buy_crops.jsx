import React, { useEffect, useState } from 'react'
// import router from '../../../server/router/sellauth'
import '../style/buy_crop.css'


const Buy_crops =() => {

  const[data,setdata]= useState([]);

  const getallselldata = async()=>{

    const res = await fetch('/getallcropdata',{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-type":"application/json"
        
      },
      Credential:"include"
      
    })
    const data = await  res.json()
    setdata(data);
    console.log(data);
  }

useEffect(()=>{
  getallselldata();

},[])

  
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
                <th>phone no</th>
                <th>email</th>

              </tr>


              {data.map((val) => {
                  return (
                    <>
                      <tr>
                        <td>{val.crop_name_id.crop_namee}</td>
                        <td>{val.variety_id}</td>
                        <td>{val.quantity}</td>
                        <td>{val.price}</td>
                        <td>{val.seller_id.name}</td>
                        <td>{val.seller_id.phoneno}</td>
                        <td>{val.seller_id.email}</td>
                      </tr>
                    </>
                  )
                
              })}


            </table>
          </div>
        </div>
    </>
  )
}

export default Buy_crops


