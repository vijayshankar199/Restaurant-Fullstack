import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "../adminstyle/Viewmenu.css"



 


function Viewmenupage(){
  const navi=useNavigate();
  
  const {cartid} =useParams()
  // localStorage.setItem("cartid", cartid);

  console.log(cartid)
    let [menu,setMenu]=useState([]);

    useEffect(()=>{
        axios.get("https://backhand-suzf.onrender.com/user/menu/getdata/").then(
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
      navi("/cart")
    }

    return (
         <div className="menu-page">

            {/* <img src={image} alt="menu_image" /> */}
            <button >CART</button>
      <div className="menu-table-wrapper">
        <h1>MENU</h1>
        <table className="menu-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Item</th>
              <th>Category</th>
              <th>Price</th>
             
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
                  {/* <button className="add-btn" onClick={()=>cart(e.id)}>Add to Cart</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
    )
}

export default Viewmenupage