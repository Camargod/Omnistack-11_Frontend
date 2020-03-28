import React, {useState, FormEvent} from "react";
import { Link, useHistory } from "react-router-dom";

import './styles.scss';

import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/apiDataService'




export default function Register()
{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWpp] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUf] = useState('');

    const history = useHistory();

    async function register(e : FormEvent)
    {
        e.preventDefault();
        let data = 
        {
            name,
            email,
            whatsapp,
            city,
            uf
        }
        let response = await api.post('/ongs',data);

        alert(`Seu ID da ONG é: ${response.data.id}`);

        history.push('/')
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero!"/>
                    <h1>
                        Cadastro
                    </h1>
                    <p>Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/" className="hrefs">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar
                    </Link>
                </section>      

                <form onSubmit={register}>
                    <input type="text" placeholder="Nome da ONG" value={name} onChange={e=>{setName(e.target.value)}}/>
                    <input type="email" placeholder="E-mail da ONG" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                    <input type="text" placeholder="WhatsApp Messenger" value={whatsapp} onChange={e=>{setWpp(e.target.value)}}/>
                    <div className="input-group">
                        <input type="text" placeholder="Cidade" value={city} onChange={e=>{setCity(e.target.value)}}/>
                        <input type="text" placeholder="UF" style={{ width: 80}} value={uf} onChange={e=>{setUf(e.target.value)}} />
                    </div>
                    <button className="button" type="submit" >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}