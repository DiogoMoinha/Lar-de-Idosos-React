import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Modals(
    {showDelete, handleCloseModalDelete, idTrabalhadorToDelete, 
        showEdit, setShowEdit, TrabalhadorToEdit, setTrabalhadorToEdit, handleCloseModalEdit}
    ) {
    return <>
        <Modal show={showDelete} onHide={() => handleCloseModalDelete(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Tem a certeza que quer apagar o Trabalhador: <b>{idTrabalhadorToDelete}</b></Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleCloseModalDelete(false)}>
                    Não
                </Button>
                <Button variant="danger" onClick={() => handleCloseModalDelete(true)}>
                    Sim
                </Button>
            </Modal.Footer>
        </Modal>

        <Modal size="lg" show={showEdit} onHide={() => (setShowEdit(false))}>
            <Modal.Header closeButton>
                <Modal.Title>Editar o Trabalhador: <b>{TrabalhadorToEdit.id}</b></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-2">
                        <p>Nome: </p>
                    </div>
                    <div className="col-md-4">
                        <input className="form-control" type="text"
                            value={TrabalhadorToEdit.Nome}
                            onChange={evt => {
                                // let aux = {...tarefaToEdit};
                                // aux.descricao = evt.target.value;
                                // setTarefaToEdit(aux)

                                setTrabalhadorToEdit({ ...TrabalhadorToEdit, Nome: evt.target.value });
                            }} />
                    </div>

                    <div className="col-md-3">
                        <p>Idade: </p>
                    </div>
                    <div className="col-md-3">
                        <input className="form-control" type="number"
                            value={TrabalhadorToEdit.Idade}
                            onChange={evt => setTrabahadorToEdit({ ...TrabalhadorToEdit, Idade: evt.target.value })} />
                    </div>

                    <div className="col-md-3">
                        <p>Email: </p>
                    </div>
                    <div className="col-md-3">
                        <input className="form-control" type="email"
                            value={TrabalhadorToEdit.Email}
                            onChange={evt => setTrabalhadorToEdit({ ...TrabalhadorToEdit, Email: evt.target.value })} />
                    </div>

                    <div className="col-md-3">
                        <p>Numero de Telemovel: </p>
                    </div>
                    <div className="col-md-3">
                        <input className="form-control" type="number"
                            value={TrabalhadorToEdit.NumTelemovel}
                            onChange={evt => setTrabalhadorToEdit({ ...TrabalhadorToEdit, NumTelemovel: evt.target.value })} />
                    </div>

                    <div className="col-md-3">
                        <p>Tipo: </p>
                    </div>
                    <div className="col-md-3">
                        <input className="form-control" type="text"
                            value={TrabalhadorToEdit.Tipo}
                            onChange={evt => setTrabalhadorToEdit({ ...TrabalhadorToEdit, Tipo: evt.target.value })} />
                    </div>

                    <div className="col-md-3">
                        <p>Descrição: </p>
                    </div>
                    <div className="col-md-3">
                        <input className="form-control" type="text"
                            value={TrabalhadorToEdit.Descricao}
                            onChange={evt => setTrabalhadorToEdit({ ...TrabalhadorToEdit, Descricao: evt.target.value })} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => (handleCloseModalEdit(false))}>
                    Não
                </Button>
                <Button variant="danger" onClick={() => (handleCloseModalEdit(true))}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}