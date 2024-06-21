import React, { useContext, useState } from "react";
import { createTrabalhadorAPI } from "../service/api";
import { AppContext } from "../../App";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function CreateTrabalhador() {
    const [Name, setName] = useState('');
    const [Idade, setIdade] = useState('');
    const [Foto, setFoto] = useState('');
    const [Email, setEmail] = useState('');
    const [NumTelemovel, setNumTelemovel] = useState('');
    const [Tipo, setTipo] = useState('');
    const [Descricao, setDescricao] = useState('');

    const ctx = useContext(AppContext);

    // adiciona o trabalhador na api
    const handleCreateTrabalhador = () => {
        if (Name == '' || Idade == '' || Email == '' || NumTelemovel == '' || Tipo == '' || Descricao == '') {
            alert("Por favor insira os dados do Trabalhador.");
            return
        }

        let Trabalhador = { Nome: Name, idade: Idade, Foto: Foto, Email: Email, NumTelemovel: NumTelemovel, Tipo: Tipo, Descricao: Descricao};

        let form = new FormData();
        form.append('Foto', Foto);

        debugger;

        createTrabalhadorAPI(Trabalhador, ctx.context.jwtToken)
            .then(res => {
                if(typeof res == 'object' && res.success){
                    setDesc('');
                    alert('O pedido foi criado.');
                }
            })
            .catch(reason => {
                alert(reason);
            });
    }

    return <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Criar Trabalhador</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-2">
                        <p>Nome: </p>
                    </div>
                    <div className="col-md-10">
                        <input className="form-control" type="text" value={Name} onChange={evt => setName(evt.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <p>Idade: </p>
                    </div>
                    <div className="col-md-10">
                        <input className="form-control" type="text" value={Idade} onChange={evt => setIdade(evt.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <p>Foto: </p>
                    </div>
                    <div className="col-md-10">
                        <input className="form-control" type="file" onChange={evt => setFoto(evt.target.files[0])} />
                    </div>
                    <div className="col-md-2">
                        <p>Email: </p>
                    </div>
                    <div className="col-md-10">
                        <input className="form-control" type="email" value={Email} onChange={evt => setName(evt.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <p>Número de Telemovel: </p>
                    </div>
                    <div className="col-md-10">
                        <input className="form-control" type="number" value={NumTelemovel} onChange={evt => setName(evt.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <p>Tipo: </p>
                    </div>
                    <div className="col-md-10">
                        <input className="form-control" type="text" value={Tipo} onChange={evt => setName(evt.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <p>Descrição: </p>
                    </div>
                    <div className="col-md-10">
                        <input className="form-control" type="text" value={Descricao} onChange={evt => setName(evt.target.value)} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="primary" onClick={handleCreateTrabalhador}>Criar</Button>
            </Modal.Footer>
        </Modal>
    </>

}