import { useContext, useEffect, useState } from "react";
import { getTrabalhadoresAPI } from "./service/api.jsx";
import { AppContext } from "../App.jsx";
import TrabalhadorItemLista from "./html/ListaTrabalhadorItem.jsx";
import CreateTrabalhador from "./html/CreateTrabalhador.jsx";

var trabalhadorObject = {
    id: 0,
    nome: '',
    idade: '',
    foto: '',
    email: '',
    numTelemovel: '',
    tipo: '',
    descricao: ''
};

function ListaTrabalhadores() {
    const ctx = useContext(AppContext);
    const [ListaTrabalhadores, setLista] = useState([trabalhadorObject]);

    // atualiza a lista de Trabalhadores da API
    const handleGetListaTrabalhadores = () => {
        getTrabalhadoresAPI()
            .then((res) => res.json())
            .then((res) => {
                console.log('API Response:', res);  // Log the API response
                if (Array.isArray(res)) {
                    setLista(res);
                } else if (Array.isArray(res.rows)) {
                    setLista(res.rows);
                } else {
                    console.error('Unexpected API response format:', res);
                    setLista([]);
                }
            })
            .catch((error) => {
                console.error('API Error:', error);
                alert('Failed to fetch data from API.');
            });
    };

    useEffect(() => {
        handleGetListaTrabalhadores();
    }, []);

    return (
        <>
            <button onClick={CreateTrabalhador}>Criar Trabalhador</button>
            <ul className="mt-5" style={{ overflowY: "scroll", height: "60vh" }}>
                {Array.isArray(ListaTrabalhadores) && ListaTrabalhadores.length > 0 ? (
                    ListaTrabalhadores.map((Trabalhador) => (
                        <TrabalhadorItemLista key={Trabalhador.id} TrabalhadorProp={Trabalhador} />
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </ul>
        </>
    );
}

export default ListaTrabalhadores;
