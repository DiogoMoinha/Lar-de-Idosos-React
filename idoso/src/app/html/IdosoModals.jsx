import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Modals(
    {showDelete, handleCloseModalDelete, idIdosoToDelete, 
        showEdit, setShowEdit, IdosoToEdit, setIdosoToEdit, handleCloseModalEdit}
    ) {
    return <>
        <Modal show={showDelete} onHide={() => handleCloseModalDelete(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Tem a certeza que quer apagar o Idoso: <b>{idIdosoToDelete}</b></Modal.Title>
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
                <Modal.Title>Editar o Idoso: <b>{IdosoToEdit.id}</b></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-2">
                        <p>Nome: </p>
                    </div>
                    <div className="col-md-4">
                        <input className="form-control" type="text"
                            value={IdosoToEdit.Nome}
                            onChange={evt => {
                                // let aux = {...tarefaToEdit};
                                // aux.descricao = evt.target.value;
                                // setTarefaToEdit(aux)

                                setIdosoToEdit({ ...IdosoToEdit, Nome: evt.target.value });
                            }} />
                    </div>

                    <div className="col-md-3">
                        <p>Idade: </p>
                    </div>
                    <div className="col-md-3">
                        <input className="form-control" type="number"
                            value={IdosoToEdit.Idade}
                            onChange={evt => setIdosoToEdit({ ...IdosoToEdit, Idade: evt.target.value })} />
                    </div>

                    <div className="col-md-3">
                        <p>Estado: </p>
                    </div>
                    <div className="col-md-3">
                        <input className="form-control" type="text"
                            value={IdosoToEdit.Estado}
                            onChange={evt => setIdosoToEdit({ ...IdosoToEdit, Estado: evt.target.value })} />
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