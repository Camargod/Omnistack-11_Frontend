import React, {useState, FormEvent} from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/apiDataService'

import {FiLogIn} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import './styles.scss'

export default function Logon()
{
    const [id,setId] = useState('');

    const history = useHistory();

    async function login(e : FormEvent)
    {
        e.preventDefault();

        try
        {
            const response = await api.post('/session',{id})
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);
            history.push('/profile');

        }
        catch(err)
        {
            console.log(err);
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form onSubmit={login}>
                    <h1>
                        Faça seu logon
                    </h1>
                    <input value={id} onChange={e=>setId(e.target.value)} placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="hrefs" to="/register">
                        <FiLogIn size={16} color="E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}