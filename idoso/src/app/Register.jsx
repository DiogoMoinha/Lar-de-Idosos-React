import { useState } from 'react';

function CreateUser() {
    const [nome, setNome] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [numTel, setNumTel] = useState('');

    function CriaUser(email,password,numTel){
        fetch('https://laramanha.azurewebsites.net/api/values/Registar', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        },
        // body: '{\n  "email": "aluno24235@ipt.pt",\n  "password": "123qwe#",\n  "dataNasc": "2003-11-01T11:11:11.032Z"\n}',
        body: JSON.stringify({
            'nome': nome,
            'email': email,
            'password': password,
            'numero de Telemóvel': numTel,
            'dataNasc': '2003-11-01T11:11:11.032Z'
        })
        }).then(res=>res.json())
        .then(res=> console.log(res));
    }

    return <>
        <div className='col-xs-12 col-md-6'><input className='form-control' type='text' value={email} onChange={(evt) => setEmail(evt.target.value)} /></div>
        <div className='col-xs-12 col-md-6'><input className='form-control' type='text' value={password} onChange={(evt) => setPassword(evt.target.value)} /></div>
        <div className='col-xs-12 col-md-6'><input className='form-control' type='number' value={numTel} onChange={(evt) => setNumTel(evt.target.value)} /></div>

        <div className='col-xs-12 col-md-3'><input className='form-control' type='button' onClick={(evt) => { CriaUser(email,password,numTel) }} value={"Registar"} /></div>
    </>;
}

export default CreateUser;