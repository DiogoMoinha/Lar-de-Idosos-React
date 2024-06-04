import { useContext, useEffect, useState } from "react";
import { getTrabalhadoresAPIPaged } from "./service/api.jsx";
import { AppContext } from "../App.jsx";


    var trabalhadorObject = {
    id: 0,
    Nome: '',
    Idade: '',
    Foto: ''
}

function ListaTrabalhadores(){
    const ctx = useContext(AppContext);

    const [ListaTrabalhadores, setLista] = useState([{...trabalhadorObject}])

    // id para paginação
    const [idPagina, setIdPagina] = useState(0);
    const [numPaginas, setNumPaginas] = useState(0);

    // variavel que controla o modal do delete
    const [showDelete, setShowDelete] = useState(false);
    const [idTrabalhadoresToDelete, setIdTrabalhadoresToDelete] = useState(0);


    // atualiza a lista de Idosos da API
    const handleGetListaTrabalhadores = () => {
        getTrabalhadoresAPIPaged(idPagina)
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
        handleGetListaTrabalhadores();
    }, [idPagina]);


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

    <CreateTrabalhador />
    
    <ul className="mt-5" style={{ overflowY: "scroll", height: "60vh" }}>
            {
                ListaTrabalhadores.length != 0 && ListaTrabalhadores[0].id != 0 ?
                    ListaTrabalhadores.map((Trabalhador) => {
                        return <TodoItemLista TrabalhadorProp={Trabalhador}
                        handleModalDeleteTrabalhadorProp={handleModalDeleteTrabalhador}
                        handleModalEditTrabalhadorProp={handleModalEditTrabalhador} />
                    }) :
                    ''
            }
        </ul>

        <TodoModals showDelete={showDelete} handleCloseModalDelete={handleCloseModalDelete} idTrabalhadoresToDelete={idTrabalhadoresToDelete}
            handleCloseModalEdit={handleCloseModalEdit} setShowEdit={setShowEdit} setTrabalhadorToEdit={setTrabalhadorToEdit}
            showEdit={showEdit} TrabalhadorToEdit={TrabalhadorToEdit}
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

export default ListaTrabalhadores;