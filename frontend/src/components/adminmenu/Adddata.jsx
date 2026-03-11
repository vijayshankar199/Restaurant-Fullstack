import { useRef } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../adminstyle/adddata.css"




function Adddata(){

    const nameref=useRef();
    const cateref=useRef();
    const priceref=useRef();

    const nav=useNavigate()

    const add=()=>{
        const url="https://backhand-suzf.onrender.com/owner/menu/postdata/";
        const input_data={
            name:nameref.current.value,
            category:cateref.current.value,
            price:priceref.current.value
        }
        axios.post(url,input_data).then(
            (res)=>{
                console.log(res.data)
                nav('/admin')
            }
        ).catch(
            (err)=>{
                console.log(err)
            }
        )
    }

    return (
        <div className="add-page">
    <div className="add-card">
      <h1>ADD MENU ITEM</h1>

      <label>
        Enter item name
        <input ref={nameref} type="text" />
      </label>

      <label>
        Enter item category
        <input ref={cateref} type="text" />
      </label>

      <label>
        Enter item price
        <input ref={priceref} type="number" />
      </label>

      <button onClick={add}>ADD</button>
    </div>
  </div>
    )
}

export default Adddata