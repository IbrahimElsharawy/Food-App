import React from "react";
import Category from "./components/Category";
import Food from "./components/Food";
import Footer from "./components/Footer";
import HeadlineCard from "./components/HeadlineCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <HeadlineCard/>
     <Food/>
     <Category/>
     <Footer/>
    </>
  );
}

export default App;
