import { useContext, useEffect, useState } from "react";
import { deleteTrabalhadorAPI, editTrabalhadorAPI } from "./service/api";
import trabalhadorModals from "./html/TrabalhadorModals";


var trabalhadorObject = {
    id: 0,
    Nome: '',
    Idade: '',
    Foto: '',
    Email: '',
    NumTelemovel: '',
    Tipo: '',
    Descricao: ''
    }

//pagina para fazer o Idoso
function Trabalhador(){

    // variavel que controla o modal de edit
    const [showEdit, setShowEdit] = useState(false);
    const [trabalhadorToEdit, setTrabalhadorToEdit] = useState({ ...trabalhadorObject });

    // variavel que controla o modal do delete
    const [showDelete, setShowDelete] = useState(false);
    const [idTrabalhadoresToDelete, setIdTrabalhadoresToDelete] = useState(0);

    useEffect(()=>{
        
    });


    // funcao que inicializa o modal de edit
    const handleModalEditTrabalhador = (trabalhador) => {
        setIdosoToEdit({
            ...trabalhador,
            Foto: trabalhador.Foto.substring(0, 10)
        });
        setShowEdit(true);
    }

     // funcao a ser chamada pelo Modal de delete
     const handleCloseModalDelete = (isToSave) => {
        if (isToSave) {
            deleteTrabalhadorAPI(idTrabalhadorToDelete, ctx.context.jwtToken)
                .then((res) => {
                    if(res.status==403)
                        throw 'Por favor faça autenticação primeiro.'    
                    return res.json();
                })
                .then((res) => {
                    handleGetListaTrabalhadores();
                })
                .catch(res => {
                    alert(res);
                });
        }

        setIdTrabalhadoresToDelete(0);
        setShowDelete(false);
    }


    // funcao que inicializa o modal de delete
    const handleModalDeleteTrabalhador = (id) => {
        setIdTrabalhadoresToDelete(id);
        setShowDelete(true);
    }


    const handleCloseModalEdit = (isToSave) => {
        if (isToSave) {
            editTrabalhadorAPI(TrabalhadorToEdit, ctx.context.jwtToken)
                .then((res) => {
                    if(res.status==403)
                        throw 'Por favor faça autenticação primeiro.'
                    return res.json();
                })
                .then((res) => {
                    handleGetListaTrabalhadores();
                })
                .catch(err => {
                    alert(err)
                });
        }

        setShowEdit(false);
    }


    return <>

        <button onClick={() => handleModalEditTrabalhador(trabalhadorToEdit)}>Editar Trabalhador</button>
        <button onClick={() => handleModalDeleteTrabalhador(trabalhadorToEdit.id)}>Apagar Trabalhador</button>

        <trabalhadorModals showDelete={showDelete} handleCloseModalDelete={handleCloseModalDelete} idTrabalhadoresToDelete={idTrabalhadorToDelete}
            handleCloseModalEdit={handleCloseModalEdit} setShowEdit={setShowEdit} setTrabalhadorToEdit={setTrabalhadorToEdit}
            showEdit={showEdit} trabalhadorToEdit={trabalhadorToEdit}
        />

        <div className="trabalhadorPagina">
            <div className="imageTrabalhador">
                <img src="./image/idoso_icon.png" />
            </div>
            <div className="trabalhadorInformação">
                <label>Nome: {trabalhador.Nome}</label>
                <label>Idade: {trabalhador.Idade}</label>
                <label>Email: {trabalhador.Email}</label>
                <label>Número de Telemovel: {trabalhador.NumTelemovel}</label>
                <label>Tipo: {trabalhador.Tipo}</label>
                <label>Descrição: {trabalhador.Descricao}</label>
            </div>

        </div>
    
    </>

}

export default Trabalhador;
