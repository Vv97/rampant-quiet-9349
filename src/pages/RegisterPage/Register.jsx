import React from 'react'
import styles from "./Register.module.css"
import logo from "./ebay.jpeg"
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div id={styles.mainregister} >
        <div id={styles.abjlogo}>
            <img src={logo} alt="logo" />
        </div>



        <div id={styles.singintext}>
            <p>Already a member? <Link rel="stylesheet" href="/" >Sign in </ Link></p>
        </div>
        <div></div>


        <div id={styles.abjdesc}>
            <p>To buy and sell on 
            <a href="https://www.ebay.com/">www.ebay.com</a> or other eBay sites internationally, existing users can login using their credentials or new users can register an eBay account on ebay.in. Kindly note you can no longer buy or sell on eBay.in </p>

        </div>



   <div id={styles.formdiv}>

    <div>
    <h1>
    Create an account
    </h1>
    </div>
    <div>    
    <input type="radio" name="business" value={"Personal"} />
    <label>Personal account</label>
    <input type="radio" name="business" value={"Business"} />
    <label >Business account</label>
    </div>
    </div>

    <div id={styles.personalform}>

    <form >
        <div id={styles.name} >

        <input type="text" placeholder='First Name' /> <input type="text" placeholder='Last Name' />
        </div>

        <div className={styles.emaildiv} >
        <input type="text" placeholder='Email'/>
        </div>

        <div className={styles.emaildiv}>
        <input type="password" placeholder='Password' />
        </div>
        <div className={styles.emaildiv}>

        <p>By clicking Register, you agree that you have read and accepted our <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259">User Agreement</a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy?id=4260">User Privacy Notice</a>, <a href="https://www.ebay.com/help/policies/default/ebays-rules-policies?id=4205">Rules and Policies</a>.</p>

        </div>

        <div id={styles.btn_div}>
        <button id={styles.btn} >Register</button>
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
