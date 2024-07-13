import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { deleteIdosoAPI, editIdosoAPI, getIdososAPI } from "./service/api";
import IdosoModals from "./html/IdosoModals";

var idosoObject = {
    id: 0,
    nome: '',
    idade: '',
    foto: '',
    estado: '0',
    guardiao: '',
    guardiaoFK: '',
    listaConsultas: [],
    listaTrabalhadores: []
};

function Idoso() {
    const { id } = useParams();
    const [idoso, setIdoso] = useState({ ...idosoObject });
    const [showEdit, setShowEdit] = useState(false);
    const [idosoToEdit, setIdosoToEdit] = useState({ ...idosoObject });
    const [showDelete, setShowDelete] = useState(false);
    const [idIdosoToDelete, setIdIdosoToDelete] = useState(0);

    useEffect(() => {
        getIdososAPI()
            .then((res) => res.json())
            .then((res) => {
                const foundIdoso = res.find((i) => i.id === parseInt(id));
                setIdoso(foundIdoso || { ...idosoObject });
            })
            .catch((error) => {
                console.error('API Error:', error);
                alert('Failed to fetch data from API.');
            });
    }, [id]);

    const handleModalEditIdoso = (idoso) => {
        setIdosoToEdit({
            ...idoso
        });
        setShowEdit(true);
    };

    const handleCloseModalEdit = (isToSave) => {
        if (isToSave) {
            editIdosoAPI(idosoToEdit)
                .then((res) => {
                    if (res.status === 403) throw 'Por favor faça autenticação primeiro.';
                    return res.json();
                })
                .then((res) => {
                    // Refresh data after editing
                })
                .catch(err => {
                    alert(err);
                });
        }
        setShowEdit(false);
    };

    const handleCloseModalDelete = (isToSave) => {
        if (isToSave) {
            deleteIdosoAPI(idIdosoToDelete, ctx.context.jwtToken)
                .then((res) => {
                    if (res.status === 403) throw 'Por favor faça autenticação primeiro.';
                    return res.json();
                })
                .then((res) => {
                    // Refresh data after deleting
                })
                .catch(res => {
                    alert(res);
                });
        }
        setIdIdosoToDelete(0);
        setShowDelete(false);
    };

    const handleModalDeleteIdoso = (id) => {
        setIdIdosoToDelete(id);
        setShowDelete(true);
    };

    return (
        <>
            <button onClick={() => handleModalEditIdoso(idoso)}>Editar Idoso</button>
            <button onClick={() => handleModalDeleteIdoso(idoso.id)}>Apagar Idoso</button>

            <IdosoModals
                showDelete={showDelete}
                handleCloseModalDelete={handleCloseModalDelete}
                idIdosoToDelete={idIdosoToDelete}
                handleCloseModalEdit={handleCloseModalEdit}
                setShowEdit={setShowEdit}
                setIdosoToEdit={setIdosoToEdit}
                showEdit={showEdit}
                IdosoToEdit={idosoToEdit}
            />

            <h1>{idoso.nome}</h1>
            <p>Idade: {idoso.idade}</p>
            <p>Foto: <img src={idoso.foto} alt={idoso.nome} /></p>
            <p>Estado: {idoso.estado}</p>
            <p>Guardiao: {idoso.guardiao}</p>
            <p>Consultas: {idoso.listaConsultas.join(', ')}</p>
            <p>Enfermeiros responsáveis: {idoso.listaTrabalhadores.join(', ')}</p>
        </>
    );
}

export default Idoso;
