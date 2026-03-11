import { useState,useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

import "../style/Admincart.css"
import Deletedata from "./adminmenu/Deletedata"


function Admincart(){
    const {id}=useParams()
    const {quentity}=useParams()
    const {cardid} =useParams()
    
    const [host,setHost]=useState([])
    const [cartdata,setCartdata]=useState([])
    
   useEffect(()=>{
        axios.get("http://127.0.0.1:8000/cart/getdata/").then(
            (res)=>{
                console.log(res.data)
                setHost(res.data)
            }
        ).catch(
            (err)=>{
                console.log(err)
            }
        )
    },[])

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/cart/cartdata/").then(
        (res)=>{
            // console.log(res.data);
            setCartdata(res.data)
        }
    ).catch(
        (err)=>{
            console.log(err.data)
        }
    )

    },[])
    const deleteitem=(id)=>{
        axios.delete("http://127.0.0.1:8000/cart/deletedata/"+id+"/").then(
            (res)=>{
                console.log(res.data)
            }
        ).catch(
            (err)=>{
                console.log(err.response.data)
            }
        )

    }
    const Deletedata=(id)=>{
        axios.delete("http://127.0.0.1:8000/cart/usercartdelete/"+id+"/").then(
            (res)=>{
                console.log(res.data)
            }
        ).catch(
            (err)=>{
                console.log(err.response.data)
            }
        )

    }

    


    return (
        <div className="cart-page">
            <div className="cart-section">
        <table cellSpacing={0} border={1} >

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
            
            {host.map((e, index) => (
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


 <div className="total-section">
        <table cellSpacing={0} border={1} >

        <thead>
            <tr>
            <th>S.NO</th>
            <th>user name</th>
            <th>total_amount</th>
            <th>Date</th>
            <th>DELETE</th>
            </tr>
        </thead>

        <tbody>
            
            {cartdata.map((e, index) => (
            <tr key={e.id}>
                <td>{index + 1}</td>
                <td>{e.user.username}</td>
                <td>{e.total_amount}</td>
                <td>{e.date}</td>
                <td><button onClick={()=>Deletedata(e.id)}>DELETE</button></td>

            </tr>
            ))}
        </tbody>
        </table>
        </div>

        </div>
    )
}

export default Admincart