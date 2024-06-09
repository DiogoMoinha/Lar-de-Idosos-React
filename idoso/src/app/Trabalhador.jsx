import { useContext, useEffect, useState } from "react";
import { deleteIdososAPI, editIdososAPI } from "./service/api";

//pagina para fazer o Idoso
function Trabalhador(){

      
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

      // variavel que controla o modal de edit
      const [showEdit, setShowEdit] = useState(false);
      const [IdosoToEdit, setIdosoToEdit] = useState({ ...trabalhadorObject });

    useEffect(()=>{
        
    });


    // funcao que inicializa o modal de edit
    const handleModalEditTrabalhador = (trabalhador) => {
        setIdosoToEdit({
            ...trabalhador,
            Nome: trabalhador.Nome,
            Idade: trabalhador.Idade,
            Foto: trabalhador.Foto,
            Email: trabalhador.Email,
            NumTelemovel: trabalhador.NumTelemovel,
            Tipo: trabalhador.Tipo,
            Descricao: trabalhador.Descricao
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

export default Trabalhador;
