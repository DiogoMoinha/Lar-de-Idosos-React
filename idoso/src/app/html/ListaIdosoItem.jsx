export default function IdosoItemLista({ IdosoProp, onItemClick, handleModalDeleteIdosoProp }) {
    return (
        <li
            key={IdosoProp.id}
            className="form-control mt-1"
            onClick={() => onItemClick(IdosoProp.id)}
        >
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <h4>{IdosoProp.nome}</h4>
                    <p>{IdosoProp.idade}</p>
                </div>
                <div className="col-md-3 col-sm-4">
                    {handleModalDeleteIdosoProp ? (
                        <button
                            onClick={(e) => { e.stopPropagation(); handleModalDeleteIdosoProp(IdosoProp.id); }}
                            type="button"
                            className="btn btn-danger float-end"
                        >
                            Apagar
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </li>
    );
}
