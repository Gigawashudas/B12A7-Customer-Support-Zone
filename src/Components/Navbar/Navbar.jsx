import React from "react";

const Navbar = () => {
  return (
    <div id="navbar" className="navbar bg-base-100 shadow-sm px-20 flex max-sm:flex-col justify-between">
      <a className="btn btn-ghost text-2xl font-bold"><h1>CS-Ticket System</h1></a>
      <div className="flex max-sm:flex-col max-sm:gap-4 gap-8">
        <ul className="flex items-center gap-8 max-sm:gap-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Changelog</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Download</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <button className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] px-4 py-3 rounded text-white">+ New Ticket</button>
      </div>
    </div>
  );
};

export default Navbar;
