import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../style/weather.css'


function Weather() {
    const history = useHistory();

    const [city, setcity] = useState("");
    // const [city, setcity] = useState("");

    
    // const getcityfromserver =()=>{


    // }

    const calAboutPage = async () => {


        try {
            const res = await fetch('/weather', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                credentials: "include"
            });

            const dataa = await res.json();
            const city = dataa.address;


            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b47eaedf9047216f8f8ccccb6cf674b5`
                const data = await fetch(url);
                const json_data = await data.json();
                // console.log(data);
        
                // setdata(json_data);
                // console.log(dataa);
                const address = json_data.name;
                const temp = json_data.main.temp - 273.15;
                const temp2 = Math.round(temp * 10);
                const country = json_data.sys.country
                document.getElementsByClassName('curr_address')[0].innerHTML = address
                document.getElementsByClassName('temp')[0].innerHTML = Math.round(temp)
                document.getElementsByClassName('temp')[0].innerHTML = temp2 / 10
                document.getElementsByClassName('country')[0].innerHTML = country
                // console.log(json_data.main.temp);

        } catch (err) {
            console.log(err);
            history.push('/')
        }

    }

    useEffect(() => {
        // getcityfromserver();
        calAboutPage();
        // fetch_data();
    })



    return (<>
        <div className='weather'>
            <input type="text" className='city_name' value={city} onChange={(e) => setcity(e.target.value)} /><br />
            <div className='temp_box'>

                <h1 className='temp'>{ }</h1>
                <h1>'c</h1>
            </div>
            <div className='address_box'>
                <h3 className='curr_address'>var</h3>
                <h3>,</h3>
                <h3 className='country'>Ind</h3>
            </div>
            {/* <button className='weather_btn'  >Update Weather</button> */}
        </div>

    </>

    )
}

export default Weather