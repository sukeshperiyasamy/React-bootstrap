
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"; 
import BasicExample from './components/NavigationBar'
import Imageslider from "./components/Carousels"
import Menu from './components/Menu'
// import Contact from './components/contact'
// import About from './components/about'
function App() {
  return (
    <>
      <BasicExample/>
<Imageslider/>
<Menu/>

    </>
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<BasicExample />} />
  //     <Route path="/contact" element={<Contact />} />
  //     <Route path="/about" element={<About />} />
  //   </Routes>
  // </BrowserRouter>

  );
}

export default App;
