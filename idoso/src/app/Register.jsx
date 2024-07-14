import { useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { AppContext } from "../App.jsx";
import { registarAPI } from "./service/api";

export default function CreateUser() {
    const navigate = useNavigate();
    //const [user, setUser] = useState({
       // nome: '',
       // email: '',
       // password: '',
       // numTel: ''
   // })
   const [nome,setNome] = useState('');
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [numTel,setNumTel] = useState('');


    const ctx = useContext(AppContext);

    const registar = () => {
        registarAPI(nome, email, password, numTel)
        .then(res=>res.json())
        .then(res=>console.log(res))
        .then(res=> {
            if(res.sucess && res.rows[0]!=null) {
                
                navigate("/login");
            }else{
            alert(res.message ?? "Algo correu mal");
            }
        });
    }

    return <>
        <h4>Página de Registar</h4>
        <div className="mb-4 mt-5 login-inputs ">
            <label className="form-label" >Nome: </label>
            <div className="ms-3 col-md-4 col-xs-6">
                <input value={nome} onChange={(evt) => setNome(evt.target.value)} type="text"  className="form-control" />
            </div>
        </div>
        
        <div className="mb-4 mt-5 login-inputs ">
            <label className="form-label">Email: </label>
            <div className="ms-3 col-md-4 col-xs-6">
                <input value={email} onChange={(evt) => setEmail(evt.target.value)} type="text" className="form-control" />
            </div>
        </div>
        
        <div className="mb-4 mt-5 login-inputs ">
            <label className="form-label">Pass: </label>
            <div className="ms-3 col-md-4 col-xs-6">
                <input value={password} onChange={(evt) => setPassword(evt.target.value)} type="text" className="form-control" />
            </div>
        </div>
        
        <div className="mb-4 mt-5 login-inputs ">
            <label className="form-label">Número de Telemovel: </label>
            <div className="ms-3 col-md-4 col-xs-6">
                <input value={numTel} onChange={(evt) => setNumTel(evt.target.value)} type="text" className="form-control" />
            </div>
        </div>

        <button onClick={()=>{
                registar();
            }} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Registar</button>

    </>;
}
