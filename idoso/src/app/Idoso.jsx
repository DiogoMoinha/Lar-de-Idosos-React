import React, { useState, useContext } from "react";
import { deleteIdosoAPI, editIdosoAPI } from "./service/api";
import IdosoModals from "./html/IdosoModals";



function Idoso() {
    const { id } = useParams();
    const [showEdit, setShowEdit] = useState(false);
    const [idosoToEdit, setIdosoToEdit] = useState({ ...idosoObject });
    const [showDelete, setShowDelete] = useState(false);
    const [idIdosoToDelete, setIdIdosoToDelete] = useState(0);

    useEffect(() => {
        // Fetch the details of the idoso with the given id
        getIdososAPI()
            .then((res) => res.json())
            .then((res) => {
                const foundIdoso = res.find((i) => i.id === parseInt(id));
                setIdoso(foundIdoso);
            })
            .catch((error) => {
                console.error('API Error:', error);
                alert('Failed to fetch data from API.');
            });
    }, [id]);


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

            <h1>{idoso.nome}</h1>
            <p>Idade: {idoso.idade}</p>
            <p>Foto: <img src={idoso.foto} alt={idoso.nome} /></p>
            <p>Estado: {idoso.estado}</p>
            <p>Guardiao: {idoso.guardiao}</p>
            <p>Lista de Consultas: {idoso.listaConsultas.join(', ')}</p>
            <p>Lista de Trabalhadores: {idoso.listaTrabalhadores.join(', ')}</p>
        </>
    );
}

export default Idoso;
