import React from "react";
import logo from "../assets/svg/logo.svg";
import message from "../assets/svg/message.svg"
import map from "../assets/svg/map.svg"
import contact from "../assets/svg/contact.svg"
import facebook from "../assets/svg/facebook.svg"
import twitter from "../assets/svg/twitter.svg"
import instagram from "../assets/svg/instagram.svg"



function Footer() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 p-10 w-[100%]">
      <div className="addres my-3">
        {" "}
        <div className="logosection flex items-center gap-2">
          <img className="w-[20%]" src={logo} alt="logo" />
          <h3 className="text-[2rem] font-bold mb-[10px] text-gray-500">FoodBite</h3>
        </div>
        <p className="w-[70%]">
          One of the best choice you will make is making sure you get the best
          food ...
        </p>
        <div className="flex gap-2 my-[10px]">
            <img src={facebook} alt="facebook" />

            <img src={twitter} alt="twitter" />

            <img src={instagram} alt="instagram" />
        </div>
      </div>

      <div className="links my-3">
        <h3 className="text-[2rem] font-bold mb-[10px] text-gray-500">Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>

      <div className="my-3">
        <h3 className="text-[2rem] font-bold mb-[10px] text-gray-500">Contact Us</h3>
        <div className="flex gap-2 mb-[10px]">
          <img src={contact} alt="contact" />
          <p>09033311123</p>
        </div>

        <div className="flex gap-2 mb-[10px]" >
          <img src={message} alt="message" />
          <p>ibTech@gmail.com</p>
        </div>

        <div className="flex gap-2 mb-[10px]">
          <img src={map} alt="map" />
          <p>Ekwe Street Rivers State Nigeria</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
