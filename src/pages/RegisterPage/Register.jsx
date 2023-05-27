import React, { useState } from 'react'
import styles from "./Register.module.css"
import { useNavigate } from 'react-router-dom'
import { Registerdata } from '../../utils/accesslocalstore'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { isDisabled } from '@testing-library/user-event/dist/utils'

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
    const dispatch = useDispatch()

    const register = useSelector((store) => console.log(store))

    console.log(register)

const handlechange = (e) => {
    setdata({...data, [e.target.name]: e.target.value})
}

console.log(data.data)

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(Registerdata(data))
    data.Type === "user" ? navigate("/login") : navigate("/adminlogin");
    setdata(initstate)
    
};

const {Firstname, Lastname, Email, Password, Type } = data

console.log(Firstname, Lastname, Email, Password, Type)

// let NEWBUTTON = document.getElementsByClassName("Newbtn")

  return (

    <div id={styles.mainregister} >

        <div id={styles.abjlogo}>
        <div> <NavLink to="/" > <img id='logopic' src={"https://i.imgur.com/FQCppUc.png"} alt="logo" /> </NavLink>   </div>
        <div style={{display:'flex', flexDirection: 'column'}}>
        <p id= {styles.paraalready}>Already a member? <NavLink to="/login" > Sign in </NavLink> </p>
        <p id= {styles.paraalready}>Admin SignIn? <NavLink to="/adminlogin" > Sign in </NavLink> </p>
        </div>
            
        </div>
        {/* </a> */}

        {/* <div id={styles.singintext}>
            <p>Already a member? <a rel="stylesheet" href="http://localhost:3000/login" >Sign in </ a></p>
        </div> */}
    <br />
   

        <div id={styles.leftdiv} >
            <div id={styles.leftdiv1}> <h3>Help</h3> </div>
            <div id={styles.leftdiv2}> <img src="https://secureir.ebaystatic.com/pictures/aw/OCS_SelfService/Inflowhelp_Question_Blue_Icon.svg" alt="ques" /> </div>
            <div id={styles.leftdiv3}> <img src="https://secureir.ebaystatic.com/pictures/aw/OCS_SelfService/Inflowhelp_Feedback_Blue_Icon.svg" alt="note" /> </div>      
       </div>


        <div id={styles.abjdesc}>
            <div id={styles.abjdesc1}> <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84711/preview.svg" alt="ok" /> </div>
            <div id={styles.abjdesc2}><p>To buy and sell on 
            <a href="https://www.ebay.com/" style={{color: "#680226"}}> www.ebay.com</a> or other eBay sites internationally, existing users can login using their credentials or new users can register an eBay account on ebay.in. Kindly note you can no longer buy or sell on eBay.in </p></div>
            

        </div>

        <div id={styles.Create} >
             <h1 >  Create an account  </h1>
        </div>

   <div id={styles.formdiv} onChange={ (e) => handlechange(e)  } >

    <div  >    
    <input type="radio" name="Type" value={"user"}  />
    <label style={{marginLeft:"5px" }} >Personal account</label>
    </div>
    <div>
    <input type="radio" name="Type" value={"admin"}  />
    <label style={{marginLeft:"5px" }} >Admin account</label>
    </div>
    </div>

    <div id={styles.personalform}>

    <form onSubmit={handleSubmit} >
        <div id={styles.name} >
        <input className={styles.inputboxtop} type="text" placeholder='First Name' name='Firstname' onChange={(e) => handlechange(e)} /> 
        <input className={styles.inputboxtop} type="text" placeholder='Last Name' name='Lastname' onChange={(e) => handlechange(e)} />
        </div>

        <div className={styles.emaildiv} >
        <input className={styles.inputbox} type="email" placeholder='Email' name="Email"  onChange={(e) => handlechange(e)} />
        </div>

        <div className={styles.emaildiv}>
        <input className={styles.inputbox} type="password" placeholder='Password' name='Password' onChange={handlechange} />
        {/* <p id={styles.fPassword}>Please enter your first name</p> */}
        </div>
        <div className={styles.termsagree}>

        <p>By clicking <b>Register</b>, you agree that you have read and accepted our <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259"><u>User Agreement</u></a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy?id=4260"><u>User Privacy Notice</u></a>, <a href="https://www.ebay.com/help/policies/default/ebays-rules-policies?id=4205"><u>Rules and Policies</u></a>.</p>
        </div>

        <div id={styles.btn_div}>
        <button  id={styles.newbtn } type="submit" className={styles.Newbtn}  disabled= {data.Firstname === ""  ||  data.Email === "" || data.Password === "" }> Register</button>
        </div>
    </form>
    </div>

    <hr />
    <div id={styles.termdivlast} >
    <p id={styles.terms}>Copyright © 1995-2023 eBay Inc. All Rights Reserved. <a href="https://www.ebayinc.com/accessibility/"> <u> Accessibility </u> </a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259"> <u> User Agreement </u> </a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy?id=4260"> <u>Privacy</u> </a>, <a href="https://pages.ebay.com/payment/2.0/terms.html"> <u> Payments Terms of Use </u> </a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/ebay-cookie-notice?id=4267"> <u> Cookies </u> </a>, <a href="https://www.ebay.com/adchoice/ccpa"> <u> Your Privacy Choices </u> </a> and <a href="https://www.ebay.com/adchoice"> 
    <u> AdChoice </u> </a></p>
    </div>

 

    </div>
  )
}
