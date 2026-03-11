import { useNavigate } from "react-router-dom"

import "../style/admin.css"
import image from "../assets/admin_pic.avif"


function Adminpage(){
    const nav=useNavigate()
    const viewmenu=()=>{
        nav('/adminmenu')  
    }
    const additems=()=>{
        nav('/menu/add')
    }
  const updateitem = () => {
  const data = prompt("Enter a number");

  nav(`/menu/update/${data}`);
};

    const deleteitem=()=>{
        const data = prompt("Enter a number");

    nav(`/menu/delete/${data}`)
    }
    const logout=()=>{
      nav('/')
    }
    const cartdata=()=>{
      nav("/cart")
    }
    return (
   
          // <img src={image} alt="admin_pic" />
      
        <div className="admin-page">
  <div className="admin-card">
    <h1 className="admin-title">MENU</h1>

          <div className="admin-actions">
          <button onClick={viewmenu}>VIEW MENU</button>
          <button onClick={additems}>ADD ITEMS</button>
          <button onClick={updateitem}>MODIFY ITEMS</button>
          <button onClick={deleteitem}>DELETE ITEMS</button>
          
        </div>
      </div>

      <div className="admin-footer-actions">
        <button onClick={cartdata}>VIEW ALL ORDERS</button>
        <button onClick={cartdata}>BILL</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
    )
}

export default Adminpage