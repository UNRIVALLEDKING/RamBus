import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function Contact() {
  return (
    <>
      <div id="contact" className="contact">
        <div className="container py-5 px-3 px-md-3">
          <div className="row">
            <h3 className="h1 text-center">Contact Us</h3>
            <div className="col-sm-6 text-center">
              <a className="navbar-brand-c rounded py-2" href="/">
                <img
                  src="https://i.ibb.co/qdJP9F8/kisspng-rolley-ethereum-enclosed-r-bitcoin-r-logo-5b081dd539d5e3-6981597315272585812369.png"
                  alt=""
                  className="d-inline-block align-text-center"
                />
                Ram Bus
              </a>
            </div>
            <div className="col-sm-6 shadow rounded py-0 py-sm-5">
              <address>
                <div>
                  <ul className="text-sm-start text-center h5">
                    <li>Maa Ambey Enterprises,</li>
                    <li>JP Road Masaurhi,</li>
                    <li>Pin : 804452 Bihar patna</li>
                    <li>
                      <FiPhoneCall /> :{" "}
                      <span>+91 9308404927 , +91 9431490707</span>
                    </li>
                  </ul>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
