
export default function IdosoItemLista({IdosoProp, handleModalDeleteIdosoProp}) {

    return <li key={IdosoProp.Nome} className="form-control mt-1">
        <div className="row">
            <div className="col-md-5 col-sm-12">
                <h4>{IdosoProp.Idade}</h4>
                <img>{IdosoProp.Foto}</img>
            </div>
            <div className="col-md-3 col-sm-4">
                
                {handleModalDeleteIdosoProp!=null ? <button onClick={() => { handleModalDeleteIdosoProp(IdosoProp.id) }} type="button" className="btn btn-danger float-end">Apagar</button>: ""}
                                
            </div>
        </div>
    </li>;
}