import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logindata } from '../../utils/accesslocalstore';
import styles from "./Login.module.css"

export const Login = () => {
  const [btnval, setbtnval] = useState(false);
  const [userid, setuserid] = useState("");
  // const [password, setpassword] = useState("");
  // const [regdata, setregdata] = useState([]);

 
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const register = useSelector((store) => store.registerReducer.register)

    

  const handleLogin = (e) => {
    e.preventDefault()
    const userdata = register.find((el) => el.Email === userid);
    if(userdata.Email === userid) {
      console.log(userdata)
      navigate("/");
    }
    
  }

 
  
  useEffect(() => {

    dispatch(logindata)
    

  }, []);


  return (

    <div id={styles.loginbody}>
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
      
    <div id={styles.sign}> Sign in to eBay or <a href="http://localhost:3000/register">create an account</a> </div>
    

    <div id={styles.formdata}>
      <form >
        <div className={styles.inputDiv} >
        
        <input type="text" placeholder='Enter or username' style={{ borderRadius: "12px" ,border: "1px solid black" }} 
        value={userid}
        onChange={ (e) => setuserid(e.target.value) } />
        </div> 

        {/* <div className={styles.inputDiv} >
        
        <input type="text" placeholder='Enter password' style={{ borderRadius: "12px" ,border: "1px solid black" }} 
        value={password}
        onChange={ (e) => setpassword(e.target.value) }
        />
        </div>  */}


        <div className={styles.inputDiv} >
        <button type='submit' className={styles.div_btn} disabled={ userid === "" } onClick={handleLogin} >Continue</button>
        </div>
        
      </form>

      <div className={styles.inputDiv} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap:"10px" }} >
        <div style={{ width:"40%" }} ><hr /></div>
        <div style={{ paddingBottom:"6px" }}>or</div>
        <div style={{ width:"40%" }} ><hr /></div>

      </div>

    <div className={styles.inputDiv}  style={{background: "#385898"}} >
    <img src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png" className={styles.btn_img } alt="fb" />
        <button type='submit'className={styles.div_btn} style={{ background: "#385898" }} >Continue with Facebook</button>
        </div>

        <div className={styles.inputDiv} style={{ border: "1px solid black"}} >
        <img src="https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png" className={styles.btn_img } alt="fb" />
        <button type='submit' className={styles.div_btn} style={{ background: "white" }}>Continue with Google</button>
        </div>

        <div className={styles.inputDiv} style={{ border: "1px solid black"}} >
        <img src="https://w7.pngwing.com/pngs/695/105/png-transparent-apple-logo-business-apple-logo-outline-heart-logo-computer-wallpaper-thumbnail.png" alt="fb" className={styles.btn_img } />
        <button type='submit' className={styles.div_btn} style={{ background: "white" }}>Continue with Apple</button>
        </div>

     <div style={{ margin:"auto" }}>

      <div id={styles.check_div}> <input type="checkbox"  />
        <p>  Stay signed in </p> </div>
      <div id={styles.text_div} ><p>Using a public or shared device?
Uncheck to protect your account.</p></div>
         
    </div>

    <div id={styles.show_box} >

      <div style={{ border: "0px solid black"}} > <button onClick={(e)=> setbtnval((prev) => !prev )} id={styles.show_div} >Learn More ^ </button>

   {btnval ?  <div id={styles.show_btn} >With this box checked, we'll keep you signed in, making it easier to bid and buy. You'll also be all set to pay if you've saved your payment info. You can always turn off this feature in My eBay. We may ask you to sign in again for some activities, such as making changes to your account.</div> : <></> } 
   </div>
      
      
    </div>
      
    
    </div>

      </div>

        
     
     <br />
     <br />
     
      <hr />

      <div id={styles.terms}>
    <p>Copyright © 1995-2023 eBay Inc. All Rights Reserved. <a href="https://www.ebayinc.com/accessibility/">Accessibility</a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259">User Agreement</a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy?id=4260">Privacy</a>, <a href="https://pages.ebay.com/payment/2.0/terms.html">Payments Terms of Use</a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/ebay-cookie-notice?id=4267">Cookies</a>, <a href="https://www.ebay.com/adchoice/ccpa">Your Privacy Choices</a> and <a href="https://www.ebay.com/adchoice">AdChoice</a></p>
    </div>

      

    </div>
  )
}
