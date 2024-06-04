import './App.css';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from './app/Register';
import Login from './app/Login';
import Home from './app/Home';
import Idosos from './app/ListaIdoso';
import Trabalhadores from './app/ListaTrabalhadores';
import NavbarCust from './app/Navbar';
import FilterHoc from './app/service/FilterHoc';



var contextInterface = {
  context: { themeIsLight: false, userId: 0 },
  setContext: () => { }
}


export const AppContext = createContext({ ...contextInterface });

function App() {
  const [ctx, setCtx] = useState({ ...contextInterface.context });


  return (
    <BrowserRouter>
      <AppContext.Provider value={{ context: ctx, setContext: setCtx }} >
        <FilterHoc>
          <NavbarCust />
          <div className={(ctx.themeIsLight ? "bg-light text-dark" : "bg-dark text-white") + ' container'}>
            <div className='row'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/Idoso" element={<Idosos />} />
                <Route path='/Trabalhadores' element={<Trabalhadores />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<CreateUser />} />
              </Routes>
            </div>
          </div>
        </FilterHoc>
      </AppContext.Provider>
    </BrowserRouter>


  );
}

export default App;

// npm install
// npm start