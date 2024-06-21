export default function TrabalhadorItemLista({TrabalhadorProp, handleModalDeleteTrabalhadorProp}) {
    return <li key={TrabalhadorProp.Nome} className="form-control mt-1">
        <div className="row">
            <div className="col-md-5 col-sm-12">
                <h4>{TrabalhadorProp.Nome}</h4>
                <h4>{TrabalhadorProp.Tipo}</h4>
                <img>{TrabalhadorProp.Foto}</img>
            </div>
            <div className="col-md-3 col-sm-4">
                
                {handleModalDeleteTrabalhadorProp!=null ? <button onClick={() => { handleModalDeleteTrabalhadorProp(TrabalhadorProp.id) }} type="button" className="btn btn-danger float-end">Apagar</button>: ""}
                
            </div>
        </div>
    </li>;
}