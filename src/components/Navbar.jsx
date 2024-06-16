import logo from "../assets/svg/logo.svg";
import cart from "../assets/svg/cart.svg";
import user from "../assets/svg/user.svg";
import {Link} from "react-router-dom"
import "../index.css";

function Navbar() {

  const user ={
    name:"John"
  }

  const cart ={
    totalCount:10
  }

  const logOut =()=>{
    console.log("done")
  }
  
  

  return (
    <div className="bg-[#FCC70C] sm:px-10 px-5 py-2">
         <header className="flex justify-between items-center">
          <div className="logosection flex items-center gap-2">
            <img src={logo} alt="logo" />
            <p>FoodBite</p>
          </div>


          <nav>
             <ul className="flex gap-5">
              {user ?
               <li className="flex flex-row gap-2">
               <Link to="/profile">{user.name}</Link>
               <div>
               <Link to="/profile">Profile</Link>
               <Link to="/orders">Orders</Link>
               <a onClick={logOut}></a>
               </div>
              </li>:
              <Link to>Login</Link>

              // <li className="flex flex-row gap-2">
              //   <p className="sm:block hidden">Login</p>
              //   <img src={user} alt="user" />
              // </li>
              // <li className="flex flex-row  gap-2">
              //   <p className="sm:block hidden">Cart</p>
              //   <img src={cart} alt="cart" />
              // </li>
}
             </ul>
          </nav>
    
    </header>
      
    </div>
  )
}

export default Navbar
