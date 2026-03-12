import axios from "axios";
import { useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom";

import "../adminstyle/modifydata.css"




function Moditydata(){
    const {id}=useParams()
    const nav=useNavigate()

    const nameref=useRef();
    const catref=useRef();
    const priceref=useRef()

    useEffect(()=>{
        axios.get("https://backhand-suzf.onrender.com/owner/menu/updatedata/"+id+"/").then(
            (res)=>{
                console.log(res.data)
                nameref.current.value=res.data.name,
                catref.current.value=res.data.category,
                priceref.current.value=res.data.price
            }
        ).catch(
            (err)=>{
                console.log(err)
            }
        )
    },[id])

    const updatedata=()=>{
        const url="http://127.0.0.1:8000/owner/menu/updatedata/"+id+"/"
        const input_data={
            name:nameref.current.value,
            category:catref.current.value,
            price:priceref.current.value
        }
        axios.put(url,input_data).then(
            (res)=>{
                console.log(res.data)
                nav("/admin")
                
            }
        ).catch(
            (err)=>{
                console.log(err)
            }
        )
    }


    return(
       <div className="modify-page">
    <div className="modify-card">
      <h1>UPDATE MENU ITEM</h1>

      <label>
        Enter item name
        <input ref={nameref} type="text" />
      </label>

      <label>
        Enter item category
        <input ref={catref} type="text" />
      </label>

      <label>
        Enter item price
        <input ref={priceref} type="number" />
      </label>

      <button onClick={updatedata}>UPDATE DATA</button>
    </div>
  </div>
    )
}
 
export default Moditydata