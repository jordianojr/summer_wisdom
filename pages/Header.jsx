import React from "react";
import MyNavbar from "./Navbar";

function Header() {
  return (
    <header>
      <h1>Summer Wisdom</h1>
      <div style={{textAlign: "right"}}>
        <MyNavbar />
      </div>
    </header>
  );
}

export default Header;
