import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "../style/menupage.css"
import image from "../assets/menu.webp"


 


function Menupage(){
  const navi=useNavigate();
  
  const {cartid} =useParams()
  // localStorage.setItem("cartid", cartid);

  console.log(cartid)
    let [menu,setMenu]=useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/user/menu/getdata/").then(
            (res)=>{
                console.log(res.data)
                setMenu(res.data)
            }
            
        ).catch(
            (err)=>{
                console.log(err)
            }
        )
    },[]);

    const cart=(id)=>{
      const data=prompt("enter the quentity")
      // const cartid = localStorage.getItem("cartid")

      console.log(data)
      const url="http://127.0.0.1:8000/cart/postdata/"
      const input_data={
        "cart": parseInt(cartid), 
        "menu": id,
        "quantity": parseInt(data),
        "subtotal":0,
        "date":new Date().toISOString().split('T')[0]
      }
      axios.post(url,input_data).then(
        (res)=>{
          console.log(res.data)
         
        }
      ).catch(
        (err)=>{
          console.log(err.response.data)
        }
      )
      
    }
    const usercart=()=>{
      navi("/usercart/"+cartid)
    }

    return (
          <div className="menu-page">

    <div className="menu-header">
      <h1>MENU</h1>
      <button onClick={usercart}>CART</button>
    </div>

    <div className="menu-table-wrapper">
      <table className="menu-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Item</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {menu.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.category}</td>
              <td>₹{e.price}</td>
              <td>
                <button className="add-btn" onClick={()=>cart(e.id)}>
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>
    )
}

export default Menupage