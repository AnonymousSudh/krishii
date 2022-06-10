import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

function Logout() {

    const history = useHistory();


    const logoutpage = async ()=>{
        try {

            const res = await fetch('/logout', {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-type": "application/json"
                },
                credentials:"include"
              });
        // console.log(res.status);
              if(res.status ===200){
                // alert("hello")
                history.push('/')
    
            }

        } catch (error) {
            console.log(error);            
        }
    

    }


      useEffect(() => {
        // res();
        logoutpage();

    }, []);



    return (
        <>
        <h1>logout</h1>
        </>
    )
}

export default Logout