import React from "react";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import Products from "./Products.jsx";
import Header from "./Header";
import { NextUIProvider } from "@nextui-org/react";
export default function App() {
  return (
    <>  
    {/* <NextUIProvider> */}
    {/* <Header/> */}
<Products/>
{/* </NextUIProvider> */}
    </>
  );
}
