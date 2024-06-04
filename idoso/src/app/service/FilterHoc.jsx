import { useContext } from "react";
import { AppContext } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";

export default function FilterHoc({Utilizadores}){
    const ctx = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    if(ctx.context.jwtToken=="" && location.pathname.includes("Home")){
        // necessário fazer com o setTimeout porque na primeira execução o navigate ainda não está a 100%
        // então esperamos um bocadinho antes de executar o navigate que redireciona para outra página
        return setTimeout(()=>navigate("/login"), 100);
    }

    return <>{Utilizadores}</>;
}