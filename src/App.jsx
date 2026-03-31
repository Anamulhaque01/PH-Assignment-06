import React from 'react'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

import 'remixicon/fonts/remixicon.css'


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Stats/>
      <Steps/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default App
