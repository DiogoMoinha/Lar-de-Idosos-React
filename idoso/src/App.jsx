import './App.css';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from './app/Register';
import Login from './app/Login';
import Home from './app/Home';
import ListaIdoso from './app/ListaIdoso';
import ListaTrabalhadores from './app/ListaTrabalhadores';
import NavbarCust from './app/Navbar';
import FilterHoc from './app/service/FilterHoc';




var contextInterface = {
  context: { themeIsLight: false, userId: 0 },
  setContext: () => { }
}


export const AppContext = createContext({ ...contextInterface });

function App() {
  const [ctx, setCtx] = useState({ ...contextInterface.context });
  const [userId, setUserId] = useState('0');

  const atualizarUserId = (userId) => {
    setUserId(1);
  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ context: ctx, setContext: setCtx }} >
        <div className={(ctx.themeIsLight ? "bg-light text-dark" : "bg-dark text-white") + ' container'}>
          <div className='row'>
            <NavbarCust />
            <FilterHoc>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home userId={userId} setUserId={setUserId} />} />
                <Route path="/Idoso" element={<ListaIdoso />} />
                <Route path='/Trabalhadores' element={<ListaTrabalhadores />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registar" element={<CreateUser />} />
              </Routes>
            </FilterHoc>

          </div>
        </div>

      </AppContext.Provider>
    </BrowserRouter>

  );
}

export default App;

// npm install
// npm start