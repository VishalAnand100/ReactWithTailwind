// import './App.css';
// import Home from './Component/pages/home';

// function App() {
//   return (
//     <Home></Home>
//   );
// }

// export default App;

import './App.css';
import React from "react";
import Nav from "./Component/nav/index"; 
import Home from "./Component/pages/home";  // Ensure correct path
import Banner from './Component/Section Banner/Banner';
import Footer from "./Component/footer/Footer"; // Import the footer




function App() {
  return (
    <div>
    <Nav/>
      {/* <Home /> */}
      <Banner />
      <Footer/>
      

      
      
    </div>
  );
}

export default App;