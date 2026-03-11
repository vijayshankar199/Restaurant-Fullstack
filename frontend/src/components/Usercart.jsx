import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import "../style/usercart.css"


function Usercart(){
    const navi=useNavigate()
    const {cartid} =useParams()
    const [cartdata,setCartdata]=useState([])
    const [total,setTotal]=useState([])
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/cart/usercartitem/"+cartid).then(
            (res)=>{
                console.log(res.data)
                setCartdata(res.data)
            }
        ).catch(
            (err)=>{
                console.log(err.response.data)
            }
        )
    },[]

    )
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/cart/usercart/"+cartid).then(
            (res)=>{
                console.log(res.data)
                setTotal(res.data)
            }
        ).catch(
            (err)=>{
                console.log(err.response.data)
            }
        )
    },[]

    )
    const deleteitem=(id)=>{
        axios.delete("http://127.0.0.1:8000/cart/deletedata/"+id+"/").then(
            (res)=>{

                console.log(res.data)
                // fetchCartItems()
                // fetchTotal()
                            
            }
        ).catch(
            (err)=>{
                console.log(err.response.data)
            }
        )

    }
//     const fetchCartItems = () => {
//     axios.get("http://127.0.0.1:8000/cart/usercartitem/" + cartid)
//         .then(res => setCartdata(res.data))
//         .catch(err => console.log(err.response?.data))
// }

// const fetchTotal = () => {
//     axios.get("http://127.0.0.1:8000/cart/usercart/" + cartid)
//         .then(res => setTotal(res.data))
//         .catch(err => console.log(err.response?.data))
// }
// useEffect(() => {
//     fetchCartItems()
//     fetchTotal()
// }, [])

    const logout=()=>{
        navi("/")
    }
    return(
          <div className="usercart-page">

    <div className="cart-items-section">
      <h1>YOUR CART</h1>
      <table className="cart-table">
                 <thead>
                    <tr>
                    <th>S.NO</th>
                    <th>username</th>
                    <th>menu name</th>
                    <th>category</th>
                    <th>price</th>
                    <th>quantity</th> 
                    <th>Subtotal</th>
                    <th>Date</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cartdata.map((e, index) => (
                    <tr key={e.id}>
                        <td>{index + 1}</td>
                        <td>{e.cart.user.username}</td>
                        <td>{e.menu.name}</td>
                        <td>{e.menu.category}</td>
                        <td>₹{e.menu.price}</td>
                        <td>{e.quantity}</td>
                        <td>₹{e.subtotal}</td>
                        <td>{e.date}</td>
                        
                        <td><button onClick={()=>deleteitem(e.id)}>DELETE</button></td>
                       

                    </tr>
                    ))}
                </tbody>

            </table>
</div>

    <div className="cart-total-section">
      <h1>BILL SUMMARY</h1>
      <table className="total-table">
                <thead>
                <tr><th>S.no</th><th>NAME</th><th>TOTAL</th><th>PAY</th></tr>
                </thead>
                <tbody>
                {
                    total.map((e,index)=>(
                      <tr key={e.id}><td>{index+1}</td><td>{e.user.username}</td><td>{e.total_amount}</td><td><button>PAY</button></td></tr>
                    )
                )}
                </tbody>
            </table>
            </div>
        
        <button onClick={logout}>LOG OUT</button>

           
        </div>
    )
}

export default Usercart