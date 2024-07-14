import './App.css';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from './app/Register';
import Login from './app/Login';
import Home from './app/Home';
import ListaIdoso from './app/ListaIdoso';
import ListaTrabalhadores from './app/ListaTrabalhadores';
import NavbarCust from './app/Navbar';
import FilterHoc from './app/service/FilterHoc';
import Idoso from './app/Idoso';
import Trabalhador from './app/Trabalhador';

const contextInterface = {
  context: { themeIsLight: false, userId: 1 },
  setContext: () => { }
};

export const AppContext = createContext({ ...contextInterface });

function App() {
  const [ctx, setCtx] = useState({ ...contextInterface.context });
  const [userId, setUserId] = useState('0');

  const atualizarUserId = (userId) => {
    setUserId(userId);
  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ context: ctx, setContext: setCtx }}>
        <div className={(ctx.themeIsLight ? "bg-light text-dark" : "bg-dark text-white") + ' container'}>
          <div className='row'>
            <NavbarCust />
            <FilterHoc>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home userId={userId} atualizarUserId={atualizarUserId} />} />
                <Route path="/Idosos" element={<ListaIdoso />} />
                <Route path="/Idosos/:id" element={<Idoso />} />
                <Route path='/Trabalhadores' element={<ListaTrabalhadores />} />
                <Route path="/Trabalhadores/:id" element={<Trabalhador />} />
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
