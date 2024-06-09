import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../App';

export default function NavbarCust() {
    const ctx = useContext(AppContext);

    const navigate = useNavigate();

    return <Navbar expand="lg" className="bg-body-secondary">
        <Container>
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={()=>{navigate("/home")}} >Pagina Principal </Nav.Link>

                    {ctx.context.userId != 0 ? <Nav.Link onClick={()=>navigate("/ListaIdoso")} > Idosos </Nav.Link> : ''}

                    {ctx.context.userId != 0 ? <Nav.Link onClick={()=>navigate("/ListaTrabalhadores")} > Trabalhadores </Nav.Link> : ''}

                    <Nav.Link onClick={()=>navigate("/login")}> Login </Nav.Link>
                    
                    <Nav.Link onClick={()=>navigate("/registar")}> Registar </Nav.Link>
                </Nav>

                {ctx.context.userId != 0 ? <Navbar.Text>
                    Signed in as: {ctx.context.userId}
                </Navbar.Text> : ''}

            </Navbar.Collapse>

        </Container>
    </Navbar>
}