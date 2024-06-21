import { useContext, useEffect, useState } from "react";
import { getTrabalhadoresAPIPaged } from "./service/api.jsx";
import { AppContext } from "../App.jsx";

import TrabalhadorItemLista from "./html/ListaTrabalhadorItem.jsx";
import CreateTrabalhador from "./html/CreateTrabalhador.jsx";
import trabalhadorObject from "./Trabalhador.jsx";

    
function ListaTrabalhadores(){
    const ctx = useContext(AppContext);
    
    const [ListaTrabalhadores, setLista] = useState([{...trabalhadorObject}])

    // id para paginação
    const [idPagina, setIdPagina] = useState(0);
    const [numPaginas, setNumPaginas] = useState(0);


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


   
    
    return <>

    <CreateTrabalhador />
    
    <ul className="mt-5" style={{ overflowY: "scroll", height: "60vh" }}>
            {
                ListaTrabalhadores.length != 0 && ListaTrabalhadores[0].id != 0 ?
                    ListaTrabalhadores.map((Trabalhador) => {
                        return <TrabalhadorItemLista TrabalhadorProp={Trabalhador}/>
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

export default ListaTrabalhadores;