import { useEffect, useRef } from "react"
import image from "../assets/image.png";
import axios from "axios";


import Menupage from "./Menupage";
import "../style/login_pase.css"
import { useNavigate } from "react-router-dom";


function Login_page(){
   const nav=useNavigate()
   const usernameref=useRef();
   const usernumberRef=useRef();
   const usermailref=useRef();
   const adminnameref=useRef();
   const adminpassref=useRef();
   let userid=""

  const userlogin = () => {
  const url = "http://127.0.0.1:8000/user/postdata/";

  const input_data = {
    username: usernameref.current.value,
    mobile_no: usernumberRef.current.value,
    email: usermailref.current.value,
    date:new Date().toISOString().split('T')[0],
  };

  axios.post(url, input_data)
    .then((res) => {
      console.log(res.data);

      const userid = res.data.id;   

      const carturl = "http://127.0.0.1:8000/cart/cartdata/";

      const cartdata = {
        user: userid,
        total_amount: 0,
        date:new Date().toISOString().split('T')[0],
      };

      return axios.post(carturl, cartdata);  
    })
    .then((cartRes) => {
      console.log(cartRes.data);
      const cartid=cartRes.data.id;
      nav("/user/menu/"+cartid);  
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};


   const adminlogin=()=>{
    const url1="http://127.0.0.1:8000/owner/login/";
    const input_data1={
        username:adminnameref.current.value,
        password:adminpassref.current.value
    }
    axios.post(url1,input_data1).then(
        (res)=>{
            console.log(res.data)
            nav("/admin")
            
        }
    ).catch(    
        (err)=>{
            console.log(err.response.data)
        }
    )
   }



    return (
        <div className="login-page">
      <img src={image} alt="log_page_pic" className="login-banner" />

      <div className="login-container">
        <div className="login-card user-card">
          <h1>USER LOG IN</h1>

          <label>
            Enter Your name
            <input ref={usernameref} />
          </label>

          <label>
            Enter Your number
            <input ref={usernumberRef} />
          </label>

          <label>
            Enter Your email
            <input ref={usermailref} />
          </label>

          <button onClick={userlogin}>LOG IN</button>
        </div>

        <div className="login-card admin-card">
          <h1>ADMIN LOG IN</h1>

          <label>
            Enter Your name
            <input ref={adminnameref} />
          </label>

          <label>
            Enter Your password
            <input ref={adminpassref} type="text" />
          </label>

          <button onClick={adminlogin}>LOG IN</button>
        </div>
      </div>
    </div>
    )
}


export default Login_page





