import { useContext, useEffect, useState } from "react";
import { deleteIdososAPI, editIdososAPI, getIdososAPI, getIdososAPIPaged } from "../service/api";


import { AppContext } from "../App";


    var idosoObject = {
    id: 0,
    Nome: '',
    Idade: '',
    Foto: ''
}

function ListaIdoso(){
    const ctx = useContext(AppContext);

    const [ListaIdosos, setLista] = useState([{...idosoObject}])

    // id para paginação
    const [idPagina, setIdPagina] = useState(0);
    const [numPaginas, setNumPaginas] = useState(0);



     // funcao a ser chamada pelo Modal de delete
     const handleCloseModalDelete = (isToSave) => {
        if (isToSave) {
            deleteIdososAPI(idIdosoToDelete, ctx.context.jwtToken)
                .then((res) => {
                    if(res.status==403)
                        throw 'Não se encontra autenticado. Por favor autentique-se'    
                    return res.json();
                })
                .then((res) => {
                    handleGetListaIdosos();
                })
                .catch(res => {
                    alert(res);
                });
        }

        setIdTarefaToDelete(0);
        setShowDelete(false);
    }

    const handleCloseModalEdit = (isToSave) => {
        if (isToSave) {
            editTarefasAPI(tarefaToEdit, ctx.context.jwtToken)
                .then((res) => {
                    if(res.status==403)
                        throw 'Não estás autenticado pá!'
                    return res.json();
                })
                .then((res) => {
                    handleGetListaTarefas();
                })
                .catch(err => {
                    alert(err)
                });
        }

        setShowEdit(false);
    }


}

return ListaIdoso