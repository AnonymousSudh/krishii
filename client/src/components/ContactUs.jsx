import React from 'react'
import '../style/Contact.css'

function ContactUs() {
  return (
    <>
      <div className="body-head">
        <div className="login-box">
          <div className="left">

            <p style={{ color: '#ddd' }}>Hello lets get in touch</p>

            <input type="text" name="username" placeholder="Username" />

            <input type="text" name="number" placeholder="enter 10 digit mobile no." />
            <input type="text" name="email" placeholder="E-mail" />
            <input type="text" name="text1" placeholder="Reason for contact" />
            <input type="text" name="text2" placeholder="Meassage" />

            <input type="submit" name="signup_submit" value="Send message" />
          </div>

          <div className="right">
            <h1 className="right-box">We'd love to <h1> Hear <span style={{ color: '#6da8f2' }}>from you </span></h1><p className="right-box1">info@jamesw.in</p></h1>
            <p className="right-box2">prefered method for communication <br /><br />
              <input type="radio" id="phone" name="language" value="Phone" />
              <label className="phone" for="phone">Phone</label>
              <input type="radio" id="e-mail" name="language" value="E-mail" />
              <label className="email" for="e-mail">E-mail</label><br></br>
            </p>

          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs