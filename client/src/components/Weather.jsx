import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../style/weather.css'


function Weather() {
    const history = useHistory();

    const [dataa, setdata] = useState();
    const [city, setcity] = useState("");

    

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

            const data = await res.json();
            console.log(data);

            console.log(data.address)
            setcity(data.address);

            // setUserData(data);

            // // console.log(userData.name);
            // document.getElementsByClassName('name')[0].innerHTML = data.name
            // document.getElementsByClassName('email')[0].innerHTML = data.email
            // document.getElementsByClassName('phone_noo')[0].innerHTML=data.phoneno


            if (!res.status === 200) {
                const error = new Error(res.error);
                console.log(error);
            }

        } catch (err) {
            console.log(err);
            history.push('/')
        }

    }

    useEffect(() => {
        calAboutPage();

        const fetch_data = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b47eaedf9047216f8f8ccccb6cf674b5`
            const data = await fetch(url);
            const json_data = await data.json();
            console.log(data);

            setdata(json_data);
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
        }
        fetch_data();
    }, [city])




    // button click kr ne ke baad weather fetch kare

    // const fetch_weather = async () => {

    //     navigator.geolocation.getCurrentPosition(success);

    //     async function success(position) {
    //         const latitude = position.coords.latitude;
    //         const longitude = position.coords.longitude;
    //         // const latitude = 25.279119529819667
    //         // const longitude = 83.10054684128379
    //         console.log(latitude);
    //         console.log(longitude);
    //         const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b47eaedf9047216f8f8ccccb6cf674b5`

    //         const data = await fetch(url);
    //         const json_data = await data.json();
    //         const address = json_data.name;
    //         const temp = json_data.main.temp - 273.15;
    //         const temp2 = Math.round(temp*10);
    //         const country = json_data.sys.country

    //         document.getElementsByClassName('curr_address')[0].innerHTML = address
    //         // document.getElementsByClassName('temp')[0].innerHTML = Math.round(temp)
    //         document.getElementsByClassName('temp')[0].innerHTML = temp2/10
    //         document.getElementsByClassName('country')[0].innerHTML = country
    //         // console.log(json_data.main.temp);
    //     }

    //     // const url = `https://api.openweathermap.org/data/2.5/weather?lat=25.279119529819667&lon=83.10054684128379&appid=b47eaedf9047216f8f8ccccb6cf674b5`


    // }



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