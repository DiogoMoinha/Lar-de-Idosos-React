import { useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { AppContext } from "../App.jsx";
import { registarAPI } from "./service/api";

export default function CreateUser() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        nome: '',
        email: '',
        password: '',
        numTel: ''
    })


    const ctx = useContext(AppContext);

    const registar = () => {
        registarAPI(user.nome, user.email, user.password, user.numTel)
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
        <div className="mb-4 mt-5 login-inputs ">
            <label className="form-label" >Nome: </label>
            <div className="ms-3 col-md-4 col-xs-6">
                <input value={user.nome} onChange={evt => setUser({...user, nome:evt.target.value})} type="text"  className="form-control" />
            </div>
        </div>
        
        <div className="mb-4 mt-5 login-inputs ">
            <label className="form-label">Email: </label>
            <div className="ms-3 col-md-4 col-xs-6">
                <input value={user.email} onChange={evt => setUser({...user, email:evt.target.value})} type="text" className="form-control" />
            </div>
        </div>
        
        <div className="mb-4 mt-5 login-inputs ">
            <label className="form-label">Pass: </label>
            <div className="ms-3 col-md-4 col-xs-6">
                <input value={user.password} onChange={evt => setUser({...user, password:evt.target.value})} type="text" className="form-control" />
            </div>
        </div>
        
        <div className="mb-4 mt-5 login-inputs ">
            <label className="form-label">Número de Telemovel: </label>
            <div className="ms-3 col-md-4 col-xs-6">
                <input value={user.numTel} onChange={evt => setUser({...user, numTel:evt.target.value})} type="text" className="form-control" />
            </div>
        </div>

        <button onClick={()=>{
                registar();
            }} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Registar</button>

    </>;
}
