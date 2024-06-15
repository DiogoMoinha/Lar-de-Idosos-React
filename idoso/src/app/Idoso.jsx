import { useContext, useEffect, useState } from "react";
import { deleteIdososAPI, editIdosoAPI } from "./service/api";

var idosoObject = {
    id: 0,
    Nome: '',
    Idade: '',
    Estado: 'Pendente',
    Foto: ''
}


//pagina para fazer o Idoso
function Idoso(){

      const [showEdit, setShowEdit] = useState(false);
      const [IdosoToEdit, setIdosoToEdit] = useState({ ...IdosoObject });

    useEffect(()=>{
        
    });

    const handleModalEditIdoso = (idoso) => {
        setIdosoToEdit({
            ...idoso,
            Nome: idoso.Nome,
            Idade: idoso.Idade,
            Foto: idoso.Foto.substring(0, 10)
        });
        setShowEdit(true);
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


    return <>

       <button onClick={handleModalEditIdosoProp={handleModalEditIdoso}}></button> 

       <IdosoModals 
            handleCloseModalEdit={handleCloseModalEdit} setShowEdit={setShowEdit} setIdosoToEdit={setIdosoToEdit}
            showEdit={showEdit} IdosoToEdit={IdosoToEdit}
        />
       

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
