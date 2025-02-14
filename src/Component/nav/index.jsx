// import React from "react"

// const Nav=function(){
// return (
//     <h>Navigation</h>
// )
// }
// export default Nav

// New Code
import React, { useState, useEffect } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
//import simplifyinglogo from "../../images/simplifyinglogo.png"; // Import the logo

const Nav = () => {
//   const [isMobile, setIsMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // const handleResize = () => setIsMobile(false);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <Mobile /> : <Desktop />;
};

export default Nav;

