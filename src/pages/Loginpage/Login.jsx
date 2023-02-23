import { Flex } from '@chakra-ui/react'
import React from 'react'
import styles from "./Login.module.css"

export const Login = () => {
  return (
    <div id={styles.loginbody}>
      login
      <div id={styles.learn} ><a href="https://connect.ebay.com/srv/survey/a/reg.personalized">Tell us what you think</a></div>
      <div id={styles.logo}>
        <img src="https://i.imgur.com/FQCppUc.png" alt="logo" />
      </div>
      <div id={styles.formDiv}>


    <div id={styles.desc}> 
    To buy and sell on www.ebay.com or other eBay sites internationally, existing users can login using their credentials or new users can register an eBay account on ebay.in. Kindly note you can no longer buy or sell on eBay.in.</div>

    <div id={styles.hello}>
       <h1>Hello</h1> 
      </div>
      
    <div id={styles.sign}> Sign in to eBay or <a href="/">create an account</a> </div>
    

    <div id={styles.formdata}>
      <form >
        <div className={styles.inputDiv} >
        <input type="text" placeholder='Enter E-mail' />
        </div> 
        <div className={styles.inputDiv} >
        <button type='submit'>Continue</button>
        </div>
        
      </form>

      {/* <div style={{display: Flex }}>
        <div><hr /></div>
        or
        <div><hr /></div>
      </div> */}
    <div className={styles.inputDiv} >
        <button type='submit'>Continue with Facebook</button>
        </div>

        <div className={styles.inputDiv} >
        <button type='submit'>Continue with Google</button>
        </div>

        <div className={styles.inputDiv} >
        <button type='submit'>Continue with Apple</button>
        </div>

    
    </div>











      </div>

      <hr />

      

    </div>
  )
}
