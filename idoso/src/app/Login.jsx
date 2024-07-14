import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../App.jsx";
import { loginAPI } from "./service/api.jsx";

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        pass: ''
    });

    const handleUserId = () => {
        atualizarVariavel('1');
    };

    const ctx = useContext(AppContext);

    const login = () => {
        loginAPI(user.email, user.pass)
        .then(res => res.json())
        .then(res => {
            
                navigate("/home");
                handleUserId();
            //} else {
               // alert(res.message ?? "Algo correu mal");
            //}
        })
        .catch(error => {
            console.error('Error during login:', error);
            alert("Algo correu mal");
        });
    }

    return (
        <div style={{ height: '80vh' }}>
            <h4>Página de autenticação</h4>
            <div className="mb-4 mt-5 login-inputs ">
                <label className="form-label" htmlFor="form2Example1">Email:</label>
                <div className="ms-3 col-md-4 col-xs-6">
                    <input 
                        value={user.email} 
                        onChange={evt => setUser({ ...user, email: evt.target.value })} 
                        type="email" 
                        id="form2Example1" 
                        className="form-control" 
                    />
                </div>
            </div>

            <div className="mb-4 mt-5 login-inputs ">
                <label className="form-label" htmlFor="form2Example1">Palavra-passe:</label>
                <div className="ms-3 col-md-4 col-xs-6">
                    <input 
                        value={user.pass} 
                        onChange={evt => setUser({ ...user, pass: evt.target.value })} 
                        type="password" 
                        id="form2Example2" 
                        className="form-control" 
                    />
                </div>
            </div>

            <div className="mb-4 mt-5 login-inputs ">
                <button
                    onClick={login} 
                    type="button" 
                    data-mdb-button-init 
                    data-mdb-ripple-init 
                    className="btn btn-primary btn-block mb-4"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
