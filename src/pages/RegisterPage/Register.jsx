import React, { useState } from 'react'
import styles from "./Register.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { Registerdata } from '../../utils/accesslocalstore'

const initstate = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
    Type: "",
}


export const Register = () => {
    const [data, setdata] = useState(initstate)
    const navigate = useNavigate()

    console.log(data)

const handlechange = (e) => {
    setdata({...data, [e.target.name]: e.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault()
    Registerdata(data)
    setdata(initstate)
    navigate("/login")

};


  return (

    <div id={styles.mainregister} >
        <div id={styles.abjlogo}>
            <img src={"https://i.imgur.com/FQCppUc.png"} alt="logo" />
        </div>

        <div id={styles.singintext}>
            <p>Already a member? <a rel="stylesheet" href="http://localhost:3000/login" >Sign in </ a></p>
        </div>
    <br />
    <br />
    <br />

        <div id={styles.leftdiv} >
        <h3>Help</h3>   
           <img src="https://secureir.ebaystatic.com/pictures/aw/OCS_SelfService/Inflowhelp_Question_Blue_Icon.svg" alt="ques" />
           
            <img src="https://secureir.ebaystatic.com/pictures/aw/OCS_SelfService/Inflowhelp_Feedback_Blue_Icon.svg" alt="note" />
      
       </div>


        <div id={styles.abjdesc}>
            <p>To buy and sell on 
            <a href="https://www.ebay.com/">www.ebay.com</a> or other eBay sites internationally, existing users can login using their credentials or new users can register an eBay account on ebay.in. Kindly note you can no longer buy or sell on eBay.in </p>

        </div>



   <div id={styles.formdiv}>

    <div style={ {justifyContent:"center", alignItems: "center"}}>
    <h1 >
    Create an account
    </h1>
    </div>
    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"  }} onChange={ (e) => handlechange(e)  }>    
    <input type="radio" name="Type" value={"user"} />
    <label>Personal account</label>
    <input type="radio" name="Type" value={"admin"} />
    <label >Business account</label>
    </div>
    </div>

    <div id={styles.personalform}>

    <form onSubmit={handleSubmit} >
        <div id={styles.name} >

        <input type="text" placeholder='First Name' name='Firstname' onChange={(e) => handlechange(e)} /> <input type="text" placeholder='Last Name' name='Lastname' onChange={(e) => handlechange(e)} />
        </div>

        <div className={styles.emaildiv} >
        <input type="text" placeholder='Email' name="Email"  onChange={(e) => handlechange(e)} />
        </div>

        <div className={styles.emaildiv}>
        <input type="password" placeholder='Password' name='Password' onChange={handlechange} />
        </div>
        <div className={styles.emaildiv}>

        <p>By clicking Register, you agree that you have read and accepted our <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259">User Agreement</a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy?id=4260">User Privacy Notice</a>, <a href="https://www.ebay.com/help/policies/default/ebays-rules-policies?id=4205">Rules and Policies</a>.</p>

        </div>

        <div id={styles.btn_div}>
        <button id={styles.btn} type="submit" disabled={ data.Firstname === "" || data.Lastname === "" || data.Email === "" || data.Password ==="" || data.Type === "" }  >Register</button>
        </div>
    </form>
    </div>

    <hr />
    

    <div id={styles.terms}>
    <p>Copyright © 1995-2023 eBay Inc. All Rights Reserved. <a href="https://www.ebayinc.com/accessibility/">Accessibility</a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259">User Agreement</a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy?id=4260">Privacy</a>, <a href="https://pages.ebay.com/payment/2.0/terms.html">Payments Terms of Use</a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/ebay-cookie-notice?id=4267">Cookies</a>, <a href="https://www.ebay.com/adchoice/ccpa">Your Privacy Choices</a> and <a href="https://www.ebay.com/adchoice">AdChoice</a></p>
    </div>

 

    </div>
  )
}
