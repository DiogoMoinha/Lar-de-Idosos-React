import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../App';

export default function NavbarCust() {
    const ctx = useContext(AppContext);
    const navigate = useNavigate();

    const handleSair = () => {
        // Update state
        ctx.setContext(prevContext => ({ ...prevContext, userId: 0 }));

        // Perform navigation after state update
        navigate('/home');
    };

    return (
        <Navbar expand="lg" className="bg-body-secondary">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/home")}>Pagina Principal</Nav.Link>
                        {ctx.context.userId !== 0 && <Nav.Link onClick={() => navigate("/Idosos")}> Idosos</Nav.Link>}
                        {ctx.context.userId !== 0 && <Nav.Link onClick={() => navigate("/Trabalhadores")}> Trabalhadores</Nav.Link>}
                        {ctx.context.userId === 0 && <Nav.Link onClick={() => navigate("/login")}> Login</Nav.Link>}
                        {ctx.context.userId === 0 && <Nav.Link onClick={() => navigate("/registar")}> Registar</Nav.Link>}
                        {ctx.context.userId !== 0 && <Nav.Link onClick={handleSair}> Sair</Nav.Link>}
                    </Nav>
                    {ctx.context.userId !== 0 && (
                        <Navbar.Text>
                            Signed in as: {ctx.context.userId}
                        </Navbar.Text>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
