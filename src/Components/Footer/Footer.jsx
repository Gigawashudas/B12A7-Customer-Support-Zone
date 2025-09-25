import React from "react";

const Footer = () => {
  return (
    <div className="bg-black max-sm:p-4 p-20 pb-0 text-white">
      <div className="flex max-sm:flex-col max-sm:gap-4 justify-between mb-20">
        <div className="w-[350px] flex flex-col gap-4">
          <h2 className="font-bold text-2xl">CS — Ticket System</h2>
          <p className="text-[#a1a1aa]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-[20px]">Company</h3>
          <ul className="text-[#a1a1aa] flex flex-col gap-4">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Mission</a>
            </li>
            <li>
              <a href="#">Contact Saled</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-[20px]">Services</h3>
          <ul className="text-[#a1a1aa] flex flex-col gap-4">
            <li>
              <a href="#">Products & Services</a>
            </li>
            <li>
              <a href="#">Customer Stories</a>
            </li>
            <li>
              <a href="#">Download Apps</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-[20px]">Information</h3>
          <ul className="text-[#a1a1aa] flex flex-col gap-4">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Join Us</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-[20px]">Social Links</h3>
          <ul className="text-[#a1a1aa] flex flex-col gap-4">
            <li>
              <a href="#">
                <span className="bg-white px-1.5 py-1 rounded-full text-black">
                  <i className="fa-brands fa-x-twitter"></i>
                </span>{" "}
                @CS — Ticket System
              </a>
            </li>
            <li>
              <a href="#">
                <span className="bg-white px-[7px] py-1 rounded-full text-black">
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>{" "}
                @CS — Ticket System
              </a>
            </li>
            <li>
              <a href="#">
                <span className="bg-white px-[9px] py-1 rounded-[50%] text-black">
                  <i className="fa-brands fa-facebook-f"></i>
                </span>{" "}
                @CS — Ticket System
              </a>
            </li>
            <li>
              <a href="#">
                <span className="bg-white px-1.5 py-1 rounded-[50%] text-black">
                  <i className="fa-solid fa-envelope"></i>
                </span>{" "}
                support@cst.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="py-[30px] border-t border-white text-center">&copy; 2025 CS — Ticket System. All rights reserved.</p>
    </div>
  );
};

export default Footer;
