import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getIdososAPI } from "./service/api.jsx";
import CreateIdoso from "./html/CreateIdoso.jsx";
import IdosoItemLista from "./html/ListaIdosoItem.jsx";

var idosoObject = {
    id: 0,
    nome: '',
    idade: '',
    foto: '',
    estado: '0',
    guardiao: '',
    guardiaoFK: '',
    listaConsultas: [],
    listaTrabalhadores: []
};

function ListaIdoso() {
    const [ListaIdosos, setLista] = useState([idosoObject]);
    const navigate = useNavigate();

    const [showCreateIdoso, setShowCreateIdoso] = useState(false);

    const handleCloseCreateIdoso = () => setShowCreateIdoso(false);
    const handleShowCreateIdoso = () => setShowCreateIdoso(true);


    const handleGetListaIdosos = () => {
        getIdososAPI()
            .then((res) => res.json())
            .then((res) => {
                console.log('API Response:', res);
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
        handleGetListaIdosos();
    }, []);

    const handleItemClick = (id) => {
        navigate(`/Idosos/${id}`);
    };

    return (
        <>
            <button onClick={handleShowCreateIdoso}>Adicionar Idoso</button>
            <CreateIdoso show={showCreateIdoso} handleClose={handleCloseCreateIdoso} />

            <ul className="mt-5" style={{ overflowY: "scroll", height: "60vh" }}>
                {Array.isArray(ListaIdosos) && ListaIdosos.length > 0 ? (
                    ListaIdosos.map((idoso) => (
                        <IdosoItemLista
                            key={idoso.id}
                            IdosoProp={idoso}
                            onItemClick={handleItemClick}
                        />
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </ul>
        </>
    );
}

export default ListaIdoso;
