import React from "react";
import Form from "../contactform";
import Map from "../../widgets/images/map.jpg";

import Facebook from "../../widgets/icon/facebook.png";
import Snapchat from "../../widgets/icon/snapchat.png";
import Whatapp from "../../widgets/icon/whatsapp.png";

import Pin from "../../widgets/icon/pin.png";
import Phonecall from "../../widgets/icon/phonecall.png";

import "./template.css";

const Template = (props) => {
  return (
    <div className='main'>
      <div className='left'>
        <h1>We'd love to hear from you</h1>
        <Form />
        <hr className='hr' />
        <div className='footer'>
          <h6>Get update on</h6>
          <img src={Facebook} alt='' />
          <img src={Snapchat} alt='' />
          <img src={Whatapp} alt='' />
        </div>
      </div>
      <div className='right'>
        <h1>Reach out to us directly</h1>
        <div className='mainlo'>
          <div className='lo'>
            <img src={Pin} alt='' />
            <div className='line' />
            <div className='lo2'>
              <h7>Bucketheadland</h7>
              <h7>Los Angeles</h7>
              <h7>Califonia</h7>
            </div>
          </div>
          <div className='lo'>
            <img src={Phonecall} alt='' />
            <div className='line' />
            <div className='lo2'>
              <h7>984-771-977</h7>
              <h7>984-771-977</h7>
              <h7>984-771-977</h7>
            </div>
          </div>
        </div>
        <img className='image' src={Map} alt='' />
      </div>
    </div>
  );
};
export default Template;
