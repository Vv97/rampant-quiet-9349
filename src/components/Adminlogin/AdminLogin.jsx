import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AdminloginSucessAction, authSucessAction } from '../../Redux/Registerdata/action';
import { logindata, setLocalDate, adminlogindata } from '../../utils/accesslocalstore';
import { NavLink } from 'react-router-dom';
import styles from "./AdminLogin.module.css"
// import bcrypt from "bcryptjs-react";

export const AdminLogin = () => {
  const [btnval, setbtnval] = useState(false);
  const [userid, setuserid] = useState("");
  const [userEmail, setuserEmail] = useState("")
  
  const [pass, setpass] = useState("");
  const [regdata, setregdata] = useState([]);

  
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // const register = useSelector((store) => store.registerReducer.register)
  // console.log(register, "REGISTER")


  const admin = useSelector((store) => store.registerReducer.admin)
  console.log(admin, "ADMINBABU")

  if(admin.token) {
    window.localStorage.setItem('Admintoken', (admin.token));
  }

  const auth = useSelector((store) => store.registerReducer.isAuth)
  console.log(auth)

  const handleLogin = (e) => {
    e.preventDefault()
    let payload = {
      Email: userid,
      Password: pass
    }
    
    dispatch(adminlogindata(payload))


    // const userdata = register.find((el) => el.Email === userid);
    // const admindata = admin.find((el) => el.Email === userid);

    // console.log(userdata, "elem")
    // console.log(admindata, "admin")

    // const {Firstname, Lastname, Email, Password, Type } = userdata
    // const {Firstname, Lastname, Email, Password, Type } = admindata

    // console.log(pass, Password, "single")

    // if(userdata.Email === userid) {
    //   if(userdata.Password === pass) {
    //     setLocalDate("userdata",userdata )
    //     dispatch(authSucessAction())
    //     navigate("/");
    //   }else {
    //     alert("wrong credentials")
    //   }
    // }
    
          
    // if(userdata.Email === userid) {
    //   if(userdata.Password === pass) {
    //     setLocalDate("userdata",userdata )
    //     dispatch(authSucessAction())
    //     navigate("/");
    //   }else {
    //     alert("wrong credentials")
    //   }
    // }

    // if(admindata.Email === userid) {
    //   if(admindata.Password === pass) {
    //       setLocalDate("userdata",admindata )
    //       dispatch(authSucessAction())
    //       navigate("/admin");
    //     }else {
    //       alert("wrong credentials")
    //     }
    //   } 

      
  }


  // if(userEmail === "") {
  //   alert("wrong userid")
  // }

 
  
  // useEffect(() => {

  //   dispatch(logindata)
  //   dispatch(adminlogindata)
    

  // }, []);

  if(admin.token) {
      setLocalDate("admindata", admin.data.Firstname )
        dispatch(authSucessAction())
        navigate("/admin");
      }


  return (

    <div id={styles.loginbody}>
      
      <div id={styles.learn} ><a href="https://connect.ebay.com/srv/survey/a/reg.personalized">   Tell us what you think</a></div>
      
      <NavLink to="/">
      <div id={styles.logo}>
        <img src="https://i.imgur.com/FQCppUc.png" alt="logo" />
      </div>
      </NavLink>
      <div id={styles.formDiv}>
        <div id={styles.welcome}  >      
        <div id={styles.welcome1}> <img src="https://media0.giphy.com/media/RHigihI7PAcelUUwQA/200.webp?cid=ecf05e47x4xo6xof96v620blfcbhlpx8eqpl5kzk01ai7bp2&rid=200.webp&ct=g" alt="img" /> </div>
        <div id={styles.welcome2}> <h1>Welcome to Admin Login Page</h1></div>
        
        </div>

    <div id={styles.desc}> 
    <div id={styles.desc1}> <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84711/preview.svg" alt="yes" /> </div>
    <div id={styles.desc2} > <p>To buy and sell on www.ebay.com or other eBay sites internationally, existing users can login using their credentials or new users can register an eBay account on ebay.in. Kindly note you can no longer buy or sell on eBay.in.</p> </div>

    </div>



    <div id={styles.hello}>
       <h1>Hello</h1> 
      </div>
      
    <div id={styles.sign}> Sign in to eBay or &nbsp; <NavLink to="/register"><u>create an account</u></NavLink></div>
    

    <div id={styles.formdata}>
      <form >
        <div className={styles.inputDivEmail} >
        
        <input type="email" placeholder='Enter or username'
        className={styles.inputEmail}
        value={userid}
        onChange={ (e) => setuserid(e.target.value) } />
        </div> 

        <div className={styles.inputDivEmail} style={{ marginTop: "15px"}} >
        
        <input type="text" placeholder='Enter password' 
         className={styles.inputEmail}
        value={pass}
        onChange={ (e) => setpass(e.target.value) }
        />
        </div> 


        <div className={styles.inputDivsubmit} >
        <button type='submit' className={styles.div_btnn} disabled={ userid === "" } onClick={handleLogin} >Continue</button>
        </div>
        
      </form>

      <div className={styles.inputDivv} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap:"10px", border: "none" }} >
        <div style={{ width:"40%" }} ><hr /></div>
        <div style={{ paddingBottom:"6px" }}>or</div>
        <div style={{ width:"40%" }} ><hr /></div>

      </div>

    <div className={styles.fbinputDiv} >
    <img src="https://i.postimg.cc/nL3sf9NQ/10001.png" className={styles.btn_img } alt="fb" />
        <button type='submit'className={styles.fsdiv_btn}  >Continue with Facebook</button>
        </div>

        <div className={styles.inputDiv} >
        <img src="https://i.postimg.cc/1t48m5Z7/10002.png" className={styles.btn_img } alt="fb" />
        <button type='submit' className={styles.div_btn} >Continue with Google</button>
        </div>

        <div className={styles.inputDiv} >
        <img src="https://img.icons8.com/sf-black/2x/mac-os.png" alt="fb" className={styles.btn_img } />
        <button type='submit' className={styles.div_btn}>Continue with Apple</button>
        </div>

     <div id={styles.checkboxdiv} style={{ margin:"auto" }}>
      
      <div id={styles.check_div}> <input type="checkbox"  />
        <p>  Stay signed in </p> 
        </div>
      <div id={styles.text_div} ><p>  Using a public or shared device?
Uncheck to protect your account.</p>
      </div>
    </div>

    <div id={styles.show_box}>
      <div style={{ border: "0px solid black"}} > <button onClick={()=> setbtnval((prev) => !prev )} id={styles.show_div} >Learn More ^      </button>

   {btnval ?  <div id={styles.show_btn} >With this box checked, we'll keep you signed in, making it easier to bid and buy. You'll also be all set to pay if you've saved your payment info. You can always turn off this feature in My eBay. We may ask you to sign in again for some activities, such as making changes to your account.</div> : <></> } 
   </div>
      
    </div>
    </div>

      </div>
     <br />
     <hr />
      <div id={styles.term}>
      <p id={styles.terms}>Copyright © 1995-2023 eBay Inc. All Rights Reserved. <a href="https://www.ebayinc.com/accessibility/"> <u> Accessibility </u> </a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259"> <u> User Agreement </u> </a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy?id=4260"> <u>Privacy</u> </a>, <a href="https://pages.ebay.com/payment/2.0/terms.html"> <u> Payments Terms of Use </u> </a>, <a href="https://www.ebay.com/help/policies/member-behaviour-policies/ebay-cookie-notice?id=4267"> <u> Cookies </u> </a>, <a href="https://www.ebay.com/adchoice/ccpa"> <u> Your Privacy Choices </u> </a> and <a href="https://www.ebay.com/adchoice"> 
    <u> AdChoice </u> </a></p>
    </div>

      

    </div>
  )
}
