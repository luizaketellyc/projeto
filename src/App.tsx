import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Menu } from "./components/Menu";
import { Contato } from "./pages/Contatos/Contatos";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Sobre' element={<Sobre />}></Route>
          <Route path='/Contato' element={<Contato />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
