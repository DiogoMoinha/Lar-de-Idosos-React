import { useContext, useState } from "react";
import { createTrabalhadorAPI } from "../service/api";
import { AppContext } from "../../App";

export default function CreateIdoso() {
    const [Name, setName] = useState('');
    const [Idade, setIdade] = useState('');
    const [Foto, setFoto] = useState('');

    const ctx = useContext(AppContext);

    // adiciona o trabalhador na api
    const handleCreateTrabalhador = () => {
        if (Name == '' || Idade == '') {
            alert("Por favor insira o Nome e a Idade do Trabalhador.");
            return
        }

        let Trabalhador = { Nome: Name, idade: Idade};

        let form = new FormData();
        form.append('Foto', Foto);

        debugger;
        createTrabalhadorAPI(Trabalhador, ctx.context.jwtToken)
            .then(res => {
                if(typeof res == 'object' && res.success){
                    setDesc('');
                    alert('O pedido foi criado.');
                }
            })
            .catch(reason => {
                alert(reason);
            });
    }

    return <>
    
    <div>
    <div className="row">
            <div className="col-md-2">
                <p>Nome: </p>
            </div>
            <div className="col-md-4">
                <input className="form-control" type="text" value={Name} onChange={evt => setName(evt.target.value)} />
            </div>

            <div className="col-md-2">
                <p>Idade: </p>
            </div>
            <div className="col-md-4">
                <input className="form-control" type="text" value={Idade} onChange={evt => setIdade(evt.target.value)} />
            </div>

            <div className="col-md-2">
                <p>Foto: </p>
            </div>
            <div className="col-md-4">
                <input className="form-control" type="file" value={Foto} onChange={evt => setFoto(evt.target.value)} />
            </div>
        </div>


        <div className="row">
            <div className="col-md-3">
                <button type="button" onClick={() => { handleCreateTrabalhador() }} className="btn btn-secondary">Criar Idoso</button>
            </div>
        </div>
    </div>
    
    </>

}