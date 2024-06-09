import { useContext, useEffect, useState } from "react";
import { getIdososAPIPaged } from "./service/api.jsx";
import { AppContext } from "../App.jsx";


// variavel que controla o modal de edit
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

    // variavel que controla o modal do delete
    const [showDelete, setShowDelete] = useState(false);
    const [idIdosoToDelete, setIdIdosoToDelete] = useState(0);




    // atualiza a lista de Idosos da API
    const handleGetListaIdosos = () => {
        getIdososAPIPaged(idPagina)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setLista(res.rows);
                setNumPaginas(res.message);
            })
            .catch((error) => {
                alert(error);
            });
    }

    useEffect(()=>{
        handleGetListaIdosos();
    }, [idPagina]);


    // funcao a ser chamada pelo Modal de delete
    const handleCloseModalDelete = (isToSave) => {
        if (isToSave) {
            deleteIdosoAPI(idIdosoToDelete, ctx.context.jwtToken)
                .then((res) => {
                    if(res.status==403)
                        throw 'Por favor faça autenticação primeiro.'    
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
    }


    // funcao que inicializa o modal de delete
    const handleModalDeleteIdoso = (id) => {
        setIdIdosoToDelete(id);
        setShowDelete(true);
    }


    const handleCloseModalEdit = (isToSave) => {
        if (isToSave) {
            editIdosoAPI(IdosoToEdit, ctx.context.jwtToken)
                .then((res) => {
                    if(res.status==403)
                        throw 'Por favor faça autenticação primeiro.'
                    return res.json();
                })
                .then((res) => {
                    handleGetListaIdosos();
                })
                .catch(err => {
                    alert(err)
                });
        }

        setShowEdit(false);
    }

    // funcao que inicializa o modal de edit
    const handleModalEditIdoso = (idoso) => {
        setIdosoToEdit({
            ...idoso,
            Nome: idoso.Nome,
            Idade: idoso.Idade,
            Foto: idoso.Foto
        });
        setShowEdit(true);
    }

    
    return <>

    <CreateIdoso />
    
    <ul className="mt-5" style={{ overflowY: "scroll", height: "60vh" }}>
            {
                ListaIdosos.length != 0 && ListaIdosos[0].id != 0 ?
                    ListaIdosos.map((Idoso) => {
                        return <TodoItemLista IdosoProp={Idoso}
                        handleModalDeleteIdosoProp={handleModalDeleteIdoso}
                        handleModalEditIdosoProp={handleModalEditIdoso} />
                    }) :
                    ''
            }
        </ul>

        <TodoModals showDelete={showDelete} handleCloseModalDelete={handleCloseModalDelete} idIdosoToDelete={idIdosoToDelete}
            handleCloseModalEdit={handleCloseModalEdit} setShowEdit={setShowEdit} setIdosoToEdit={setIdosoToEdit}
            showEdit={showEdit} IdosoToEdit={IdosoToEdit}
        />

        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link">Previous</a></li>
                <li class="page-item" ><a class="page-link" onClick={()=>{setIdPagina(0)}}>1</a></li>
                <li class="page-item"><a class="page-link" onClick={()=>{setIdPagina(1)}}>2</a></li>
                <li class="page-item"><a class="page-link" onClick={()=>{setIdPagina(2)}}>3</a></li>
                <li class="page-item"><a class="page-link" >Next</a></li>
            </ul>
        </nav>
    
    </>

}

export default ListaIdoso;