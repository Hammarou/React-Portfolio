import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import PdfViewer from './components/PdfViewer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[linear-gradient(to_bottom_right,_bisque,_beige)] min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<PdfViewer />}  />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
