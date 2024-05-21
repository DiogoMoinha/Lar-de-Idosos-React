import { useContext, useEffect, useState } from "react";
import {  deleteIdososAPI, editIdososAPI } from "../service/api";

//pagina para fazer o Idoso
function Idoso(){

    // variavel que controla o modal de edit
    const [showEdit, setShowEdit] = useState(false);
    const [tarefaToEdit, setTarefaToEdit] = useState({ ...tarefaObject });

    
    return <>
        <div className="idosoPagina">
            <div className="imageIdoso">
                <img src="./image/idoso_icon.png" />
            </div>

        </div>
    
    </>

}

