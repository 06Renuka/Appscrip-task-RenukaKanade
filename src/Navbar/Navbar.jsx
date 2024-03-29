import * as React from "react";
import logo from "../Assets/logo.svg";
import admin from '../Assets/admin.svg';
import bag from "../Assets/bag.svg"
import search from "../Assets/search.svg"
import heart from "../Assets/heart.svg"


function Navbar() {
  return (
    <div className="flex flex-col items-center px-20 pt-10 pb-6 tracking-wider bg-white border-b border-solid border-neutral-200 max-md:px-5" style={{padding:'15px'}}>
      <div className="flex gap-5 items-center w-full whitespace-nowrap max-w-[1248px] max-md:flex-wrap max-md:max-w-full row" style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
      <div >
      <img
          
          src={logo}
          className="shrink-0 self-stretch w-9 aspect-square"
        />
      </div>
        
        <div className="flex-auto self-stretch my-auto text-3xl font-bold text-black">
          LOGO
        </div>
        <div className="flex gap-5 self-stretch my-auto text-base font-bold text-stone-800">
          <img
           
            src={search}
            className="shrink-0 w-6 aspect-square"
          />
          <img
           
            src={heart}
            className="shrink-0 w-6 aspect-square"
          />
          <img
           
            src={bag}
            className="shrink-0 w-6 aspect-square"
          />
          <img
           
            src={admin}
            className="shrink-0 w-6 aspect-square"
          />
          
            <select className="my-auto" style={{border:'none', padding:'5px'}}>
            <option>ENG</option>
            </select>
           
          
        </div>
      </div>
      <div className="flex row gap-5 justify-between mt-2 max-w-full text-xl font-semibold text-stone-800 w-[700px] max-md:flex-wrap max-md:mt-10" >
        <div className="justify-center py-1.5 whitespace-nowrap ">SHOP</div>
        <div className="justify-center py-1.5 whitespace-nowrap">SKILLS</div>
        <div className="justify-center py-1.5 whitespace-nowrap">STORIES</div>
        <div className="justify-center py-1.5 whitespace-nowrap">ABOUT</div>
        <div className="justify-center py-1.5">CONTACT US</div>
      </div>
    </div>
  );
}
export default Navbar;
