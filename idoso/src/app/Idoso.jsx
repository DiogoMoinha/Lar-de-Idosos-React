import { useContext, useEffect, useState } from "react";
import { deleteIdososAPI, editIdososAPI } from "./service/api";

//pagina para fazer o Idoso
function Idoso(){

      // variavel que controla o modal de edit
      const [showEdit, setShowEdit] = useState(false);
      const [IdosoToEdit, setIdosoToEdit] = useState({ ...IdosoObject });

    useEffect(()=>{
        
    });


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
        <div className="idosoPagina">
            <div className="imageIdoso">
                <img src="./image/idoso_icon.png" />
            </div>
            <div className="IdosoInformação">
                <label>Nome: {idoso.Nome}</label>
                <label>Idade: {idoso.Idade}</label>
            </div>

        </div>
    
    </>

}

export default Idoso;
