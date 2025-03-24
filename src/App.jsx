import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./Components/Footer";

const App = () => {
  const [category, setCategory] = useState('general')
  return (
    <>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <Footer/>
    </>
  );
};

export default App;
