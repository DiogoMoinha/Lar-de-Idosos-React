import React, { useContext, useState } from "react";
import { createIdosoAPI } from "../service/api";
import { AppContext } from "../../App";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function CreateIdoso({ show, handleClose }) {
    const [Name, setName] = useState('');
    const [Idade, setIdade] = useState('');
    const [Foto, setFoto] = useState('');
    const [guardiao,setGuardiao] = useState('');
    const [guardiaoFK,setGuardiaoFK] = useState('');
    const [ListaConsultas,setListaConsultas] = useState([]);
    const [ListaTrabalhadores,setListaTrabalhadores] = useState([]);


    const ctx = useContext(AppContext);

    const handleCreateIdoso = () => {
        if (Name === '' || Idade === '') {
            alert("Por favor insira o Nome e a Idade do Idoso.");
            return;
        }

        let Idoso = { Nome: Name, 
            idade: Idade, 
            estado: "Pendente", 
            guardiao: '', 
            guardiaoFK: '', 
            listaConsultas: [], 
            listaTrabalhadores: [] };

        let form = new FormData();
        form.append('Foto', Foto);

        createIdosoAPI(Idoso, ctx.context.jwtToken)
            .then(res => {
                if (typeof res === 'object' && res.success) {
                    setName('');
                    setIdade('');
                    setFoto('');
                    alert('O pedido foi criado.');
                    handleClose();
                }
            })
            .catch(reason => {
                alert(reason);
            });
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Criar Idoso</Modal.Title>
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
                        <p>Guardiao: </p>
                    </div>
                    <div className="col-md-10">
                        <input className="form-control" type="text" value={guardiao} onChange={evt => setGuardiao(evt.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <p>GuardiaoFK: </p>
                    </div>
                    <div className="col-md-10">
                        <input className="form-control" type="text" value={guardiaoFK} onChange={evt => setGuardiaoFK(evt.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <p>Lista de Consultas: </p>
                    </div>
                    <div className="col-md-10">
                        <input className="form-control" type="text" value={ListaConsultas} onChange={evt => setListaConsultas(evt.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <p>Lista de Enfermeiros: </p>
                    </div>
                    <div className="col-md-10">
                        <input className="form-control" type="text" value={ListaTrabalhadores} onChange={evt => setListaTrabalhadores(evt.target.value)} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="primary" onClick={handleCreateIdoso}>Criar</Button>
            </Modal.Footer>
        </Modal>
    );
}
