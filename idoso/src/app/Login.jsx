import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../src/App.jsx";
import { loginAPI } from "../service/api";

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        pass: ''
    })

    const ctx = useContext(AppContext);

    const login = () => {
        loginAPI(user.email, user.pass)
        .then(res => res.json())
        .then(res => {
            if(res.success && res.rows[0]!=null){
                let aux = {...ctx.context};
                aux.jwtToken = res.rows[0].jwtToken;
                aux.userId = res.rows[0].userId;

                ctx.setContext(aux);
                navigate("/todo");
            }else{
                alert(res.message ?? "Algo correu mal");
            }
        })
    }

    return <div style={{height:'80vh'}}>
        <h4>Página de Login</h4>
        <div class="mb-4 mt-5 login-inputs ">
            <label class="form-label" for="form2Example1">Email</label>
            <div className="ms-3 col-md-4 col-xs-6">
                <input value={user.email} onChange={evt => setUser({...user, email:evt.target.value})} type="email" id="form2Example1" class="form-control" />
            </div>
        </div>

        <div class="mb-4 mt-5 login-inputs ">
            <label class="form-label" for="form2Example1">Pass</label>
            <div className="ms-3 col-md-4 col-xs-6">
                <input value={user.pass} onChange={evt => setUser({...user, pass:evt.target.value})} type="password" id="form2Example1" class="form-control" />
            </div>
        </div>


        <div class="mb-4 mt-5 login-inputs ">
            <button onClick={()=>{
                login();
            }} type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Sign in</button>
        </div>

    </div>;
}