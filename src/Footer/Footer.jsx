import * as React from "react";
import "./Footer.css";

import applepay from "../Assets/Paymentoptions/applepay.svg";
import gpay from "../Assets/Paymentoptions/gpay.svg";
import mastercard from "../Assets/Paymentoptions/mastercard.svg";
import Amex from "../Assets/Paymentoptions/Amex.svg";
import opay from "../Assets/Paymentoptions/opay.svg";
import Paypal from "../Assets/Paymentoptions/Paypal.svg";
import instalogo from "../Assets/instalogo.svg";
import Americaicon from '../Assets/Americaicon.svg'

function Footer() {
  return (
    <div className="container" style={{backgroundColor:'black'}}>
      <div className="footer-content" style={{display:'flex', flexDirection:'column',margin:'20px'}}>
        <div className="row" style={{display:'flex', flexDirection:'row'}}>
          <div className="col " style={{width:'50%', margin:'20px'}}>
            <div className="w-full max-w-[1248px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                    <h3 className="text-xl font-bold text-white uppercase max-md:max-w-full" style={{textAlign:'left'}}>
                      Be the first to know
                    </h3>
                    <div className="mt-4 text-base text-white max-md:max-w-full" style={{textAlign:'left'}}>
                      Sign up for updates from mettā muse.
                    </div>
                    <div className="flex gap-4 justify-center mt-10 text-lg max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                      <input placeholder="Enter your name" className="grow justify-center items-start self-start px-4 py-2 bg-white text-neutral-300 w-fit max-md:px-5"/>
                       
                     
                      <button className="justify-center px-6 py-2 font-medium text-white uppercase whitespace-nowrap bg-black rounded-md border border-white border-solid max-md:px-5">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" style={{width:'50%'}}>
            <div className="w-full max-w-[1248px] max-md:max-w-full" >
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full" style={{width:'100%'}}>
                <div className="flex flex-col grow text-base font-bold text-white max-md:mt-10 max-md:max-w-full">
                  <div className="text-xl uppercase max-md:max-w-full" style={{textAlign:'left'}}>
                    CONTACT US
                  </div>
                  <div className="mt-6 max-md:max-w-full" style={{textAlign:'left'}}>+44 221 133 5360</div>
                  <div className="mt-6 max-md:max-w-full" style={{textAlign:'left'}}>
                    customercare@mettamuse.com
                  </div>
                  <div className="mt-8 text-xl uppercase max-md:max-w-full" style={{textAlign:'left'}}>
                    Currency
                  </div>
                  <div className="flex gap-1.5 items-center self-start mt-6 tracking-wider whitespace-nowrap">
                    <img
                     
                      src={Americaicon}
                      className="shrink-0 self-stretch w-6 aspect-square"
                    />
                    
                    <div className="self-stretch my-auto" style={{textAlign:'left'}}>USD</div>
                  </div>
                  <div className="mt-5 text-xs max-md:max-w-full" style={{textAlign:'left'}}>
                    Transactions will be completed in Euros and a currency
                    reference is available on hover.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row" style={{margin:'20px', display:'flex', flexDirection:'row', color:"white"}}>
          <div className="footer-section col-4 col-lg-6">
            <div className="text-xl font-bold">mettā muse</div>
            <div className="mt-7">About Us</div>
            <div className="mt-4">Stories</div>
            <div className="mt-4">Artisans</div>
            <div className="mt-4">Boutiques</div>
            <div className="mt-4">Contact Us</div>
            <div className="mt-4">EU Compliances Docs</div>
          </div>
          <div className="footer-section col-4 col-lg-6">
            <div className="text-xl font-bold uppercase">Quick Links</div>
            <div className="mt-7">Orders & Shipping</div>
            <div className="mt-4">Join/Login as a Seller</div>
            <div className="mt-4">Payment & Pricing</div>
            <div className="mt-4">Return & Refunds</div>
            <div className="mt-4">FAQs</div>
            <div className="mt-4">Privacy Policy</div>
            <div className="mt-4">Terms & Conditions</div>
          </div>
          <div className="footer-section col-4">
            <div className="text-xl font-bold" >Follow Us</div>
            <div className="flex gap-3 self-start mt-4" style={{justifyContent:'center'}}>
              <img
                src={instalogo}
                className="shrink-0 w-8 aspect-square"
              />
              <img
                src={instalogo}
                className="shrink-0 w-8 aspect-square"
              />
            </div>
            <div className="mt-6 text-xl font-bold uppercase">
              mettā muse <span className="uppercase">Accepts</span>
            </div>
            <div className="flex gap-2 justify-center mt-6">
              <img src={Paypal} className="shrink-0 w-14 aspect-[1.59]" />
              <img src={applepay} className="shrink-0 w-14 aspect-[1.59]" />
              <img src={Amex} className="shrink-0 w-14 aspect-[1.59]" />
              <img src={gpay} className="shrink-0 w-14 aspect-[1.59]" />
              <img src={opay} className="shrink-0 w-14 aspect-[1.59]" />
              <img src={mastercard} className="shrink-0 w-14 aspect-[1.59]" />
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="text-sm text-center">
            Copyright © 2023 mettamuse. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
