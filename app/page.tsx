"use client";

import Image from "next/image";
import React, { useState } from "react";
import * as Logging from "@/public/logging/logging";

// User ID Implementation
interface AccessModalProps {
  onAccess: () => void;
}

const AccessModal: React.FC<AccessModalProps> = ({ onAccess }) => {
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate the code (e.g., check if it's 4 digits)
    if (code.length === 4 && /^\d+$/.test(code)) {
      handleLogImplementationWithUserId(
        null, 
        "setUserId", 
        {eventName: "setUserId",
        info: {}},
        true,
        code
      );
      onAccess();
    } else {
      alert("Enter last 4 numerical digits of your student ID");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <label>
            Enter last 4 numerical digits of your student ID (e.g. AXXX
            <span style={{ fontWeight: 'bold', color: 'red' }}>1234</span>
            Z):
            <input
              type="text"
              maxLength={4}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

// Log Implementation
const handleLogImplementationWithUserId = (event:any, customName:any, customInfo:any, isSettingUserId:any, userIdInput:any) => {
  if (event) {
    console.log("log " + event.type);
  } else {
      console.log("log " + customName);
  }
  Logging.default(event, customName, customInfo, isSettingUserId, userIdInput);
}

export default function Home() {

  const handleLogImplementation = (event:any, customName:any, customInfo:any) => {
    if (event) {
      console.log("log " + event.type);
    } else {
        console.log("log " + customName);
    }
    Logging.default(event, customName, customInfo);
  }
  const handleItemListButtonClick = () => {
    handleLogImplementation(null, "itemListButtonClick", {
      eventName: "itemListButtonClick",
      info: {}
    });
  }

  const [showModal, setShowModal] = useState(true);
  const [accessGranted, setAccessGranted] = useState(false);

  const handleAccess = () => {
    setShowModal(false);
    setAccessGranted(true);
  };

  return (
    <main className="flex flex-col bg-white text-stone-900">
      {showModal && (
        <AccessModal onAccess={handleAccess} />
      )}
      {accessGranted && (
      <>
      <div className="flex flex-row justify-center items-start width:990px">
        <div style={{ float: "left", paddingTop: 5 }}>
          <Image 
              className="ive_eobj_left ive_clickable" 
              src="/logo.png" 
              alt="Passiton Logo"
              width={150}
              height={80}
          />
        </div>
        <div className="flex flex-col justify-end pl-20">
          <div className="flex justify-end">
            <Image
              src = "/login_bar.png"
              alt = "Login Bar"
              width = {608}
              height = {35}
            />
          </div>
          <div
            className="flex flex-row items-center justify-end pt-3">
            <a href="">
              <Image
                id="home-page-home-button"
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/home.png"
                alt="Home"
                width={73}
                height={61}
              />
            </a>{" "}
            <Image
              className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
              src="/about_us.png"
              alt="About Us"
              width={73}
              height={61}
            />{" "}
            <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/grant_wish.png"
                alt="Grant a Wish"
                width={73}
                height={61}
            />{" "}
            <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/vwo_list.png"
                alt="VWO List"
                width={73}
                height={61}
            />{" "}
            <a 
              href="/items"
              onClick={handleItemListButtonClick}>
              <Image
                id="home-page-item-list-button"
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/item_list.png"
                alt="Item List"
                width={73}
                height={61}
              />
            </a>{" "}
            <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/faq.png"
                alt="FAQ"
                width={73}
                height={61}
            />{" "}
            <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/contact.png"
                alt="Contact Us"
                width={73}
                height={61}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center pt-10">
          <Image
            className="" 
            src="/banner.jpeg" 
            alt="banner" 
            width={850}
            height={320}
          />
      </div>
      <div className="flex flex-row justify-center mt-[-2px]">
          <Image
            className="" 
            src="/wishlist.png" 
            alt="wishlist" 
            width={850}
            height={320}
          />
      </div>
      <div className="flex flex-row justify-center mt-[-2px]">
          <Image
            className="" 
            src="/recent_items.png" 
            alt="recent_items" 
            width={850}
            height={320}
          />
      </div>
      <div className="flex flex-row justify-center mt-[-2px] mb-10">
          <Image
            className="" 
            src="/footer.png" 
            alt="footer" 
            width={850}
            height={320}
          />
      </div>
      </>
      )}
    </main>
  );
}
