import { useNavigate } from "react-router-dom";
import { useState } from 'react';


export default function CreateUser() {
    const navigate = useNavigate();

    const [nome, setNome] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [numTel, setNumTel] = useState('');

    function CriaUser(nome,email,password,numTel){
        fetch('https://laramanha.azurewebsites.net/api/values/Registar', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            'Nome': nome,
            'Email': email,
            'Password': password,
            'NumTelemovel': numTel,
            
        })
        }).then(res=>res.json())
        .then(res=> {
            if(res.sucess) {
                navigate("/login");
            }else{
            alert(res.message ?? "Algo correu mal");
            }
        });
    }

    return <>
        <div class="mb-4 mt-5 login-inputs ">
            <label class="form-label" for="form2Example1">Nome: </label>
            <div className="ms-3 col-md-4 col-xs-6">
                <input value={nome} onChange={evt => setNome()} type="text" id="form2Example1" class="form-control" />
            </div>
        </div>
        
        <div class="mb-4 mt-5 login-inputs ">
            <label class="form-label" for="form2Example1">Email: </label>
            <div className="ms-3 col-md-4 col-xs-6">
                <input value={email} onChange={evt => setEmail()} type="email" id="form2Example1" class="form-control" />
            </div>
        </div>
        
        <div class="mb-4 mt-5 login-inputs ">
            <label class="form-label" for="form2Example1">Pass: </label>
            <div className="ms-3 col-md-4 col-xs-6">
                <input value={password} onChange={evt => setPassword()} type="password" id="form2Example1" class="form-control" />
            </div>
        </div>
        
        <div class="mb-4 mt-5 login-inputs ">
            <label class="form-label" for="form2Example1">Número de Telemovel: </label>
            <div className="ms-3 col-md-4 col-xs-6">
                <input value={numTel} onChange={evt => setNumTel()} type="number" id="form2Example1" class="form-control" />
            </div>
        </div>

        <div className='col-xs-12 col-md-3'><input className='form-control' type='button' onClick={(evt) => { CriaUser(nome,email,password,numTel) }} value={"Registar"} /></div>
    </>;
}
