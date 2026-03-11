import axios from "axios";
import { useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom";

import "../adminstyle/deletedata.css"
    



function Deletedata(){
    const {id}=useParams()
    const nav=useNavigate()

    const nameref=useRef();
    const catref=useRef();
    const priceref=useRef()

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/owner/menu/deletedata/"+id+"/").then(
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
    },[])

    const deletedata=()=>{
        const url="http://127.0.0.1:8000/owner/menu/deletedata/"+id+"/"
        const input_data={
            name:nameref.current.value,
            category:catref.current.value,
            price:priceref.current.value
        }
        axios.delete(url,input_data).then(
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
       <div className="delete-page">
      <div className="delete-card">
        <h1>DELETE MENU ITEM</h1>

        <label>
          Enter item name
          <input ref={nameref} type="text" disabled />
        </label>

        <label>
          Enter item category
          <input ref={catref} type="text" disabled />
        </label>

        <label>
          Enter item price
          <input ref={priceref} type="number" disabled />
        </label>

        <button onClick={deletedata}>DELETE DATA</button>
      </div>
    </div>
    )
}
 
export default Deletedata