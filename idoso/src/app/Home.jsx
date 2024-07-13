import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import imgBackGround from '../image/Lar-de-Idoso-exterior.webp'

export default function Home(){

    return <>
    <div className='image'>
        <img style={{opacity:0.5}} src={imgBackGround}></img>
    </div>
    
    <div className='row'>
        <h1>Informações sobre o Lar</h1>
        <div>
            <p>O lar de Idosos do Amanhã, tem multiplas comodidades para satisfazer. Tem médicos permanentes e uma equipa de enfermagem
                ao seu dispor. 
            </p>
        </div>
    </div>
    
    </>

}
