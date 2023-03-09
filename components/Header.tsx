"use client";

import Logo from "@/images/firely_logo_white.svg";
import Container from "@mui/material/Container";
import Image from "next/image";
function Header() {
  return (
    <div className="navbar-container">
      <Container>
        <div className="navbar">
          <a href="/">
            <Image className="navbar-logo" src={Logo} alt="Firely logo" />
          </a>
        </div>
      </Container>
    </div>
  );
}
export default Header;
