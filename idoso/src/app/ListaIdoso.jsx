import { useEffect, useState } from "react";
import { getIdososAPI } from "./service/api.jsx";

import CreateIdoso from "./html/CreateTrabalhador.jsx";
import IdosoItemLista from "./html/ListaIdosoItem.jsx";


var idosoObject = {
    id: 0,
    Nome: '',
    Idade: '',
    Estado: 'Pendente',
    Foto: ''
};

function ListaIdoso(){

    const [ListaIdosos, setLista] = useState([{...idosoObject}])

    // id para paginação
    const [idPagina, setIdPagina] = useState(0);
    const [numPaginas, setNumPaginas] = useState(0);
    

    // atualiza a lista de Idosos da API
    const handleGetListaIdosos = () => {
            getIdososAPI()
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

    <button onClick={CreateIdoso}>Criar Idoso</button>
    
        <ul className="mt-5" style={{ overflowY: "scroll", height: "60vh" }}>
            {
                ListaIdosos.length != 0 && ListaIdosos[0].id != 0 ?
                    ListaIdosos.map((idoso) => {
                        return <IdosoItemLista IdosoProp={idoso} />
                    }) :
                    ''
            }
        </ul>

        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link">Previous</a></li>
                <li className="page-item"><a className="page-link" onClick={()=>{setIdPagina(0)}}>1</a></li>
                <li className="page-item"><a className="page-link" onClick={()=>{setIdPagina(1)}}>2</a></li>
                <li className="page-item"><a className="page-link" onClick={()=>{setIdPagina(2)}}>3</a></li>
                <li className="page-item"><a className="page-link" >Next</a></li>
            </ul>
        </nav>
    
    </>

}

export default ListaIdoso;