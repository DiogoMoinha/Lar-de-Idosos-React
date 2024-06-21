import React, { useState, useContext } from "react";
import { deleteIdosoAPI, editIdosoAPI } from "./service/api";
import IdosoModals from "./html/IdosoModals";


var idosoObject = {
    id: 0,
    Nome: '',
    Idade: '',
    Estado: 'Pendente',
    Foto: ''
};

function Idoso() {
    const [showEdit, setShowEdit] = useState(false);
    const [idosoToEdit, setIdosoToEdit] = useState({ ...idosoObject });
    const [showDelete, setShowDelete] = useState(false);
    const [idIdosoToDelete, setIdIdosoToDelete] = useState(0);

    const handleModalEditIdoso = (idoso) => {
        setIdosoToEdit({
            ...idoso,
            Foto: idoso.Foto.substring(0, 10)
        });
        setShowEdit(true);
    };

    const handleCloseModalEdit = (isToSave) => {
        if (isToSave) {
            editIdosoAPI(idosoToEdit, ctx.context.jwtToken)
                .then((res) => {
                    if (res.status === 403) throw 'Por favor faça autenticação primeiro.';
                    return res.json();
                })
                .then((res) => {
                    handleGetListaIdosos();
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
                    handleGetListaIdosos();
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
            <button onClick={() => handleModalEditIdoso(idosoToEdit)}>Editar Idoso</button>
            <button onClick={() => handleModalDeleteIdoso(idosoToEdit.id)}>Apagar Idoso</button>

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

            <div className="idosoPagina">
                <div className="imageIdoso">
                    <img src="./image/idoso_icon.png" alt="Idoso Icon" />
                </div>
                <div className="IdosoInformação">
                    <label>Nome: {idosoToEdit.Nome}</label>
                    <label>Idade: {idosoToEdit.Idade}</label>
                </div>
            </div>
        </>
    );
}

export default Idoso;
