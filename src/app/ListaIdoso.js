import { useContext, useEffect, useState } from "react";
import { getIdososAPIPaged } from "../service/api";


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


    // atualiza a lista de tarefas da API
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


    return <>

    <CreateIdoso />
    
    <ul className="mt-5" style={{ overflowY: "scroll", height: "60vh" }}>
            {
                ListaIdosos.length != 0 && ListaIdosos[0].id != 0 ?
                    ListaIdosos.map((Idoso) => {
                        return <TodoItemLista tarefaProp={Idoso} />
                    }) :
                    ''
            }
        </ul>

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