import React, {useState, FormEvent} from 'react';

import './styles.scss'
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/apiDataService'


export default function NewIncident()
{
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value,setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    function submitIncident(e : FormEvent)
    {
        try
        {
            e.preventDefault();
            api.post('incidents',
            {
                title,
                description,
                value
            },
            {
                headers:
                {
                    Authorization:ongId
                }
                
            }).then(e=>{console.log(e);history.push('/profile')})
        }
        catch(err)
        {
            console.log(err);
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero!"/>
                    <h1>
                        Cadastrar novo caso
                    </h1>
                    <p>Descreva o caso detalhadamente para encontrar herói para resolver isso.</p>

                    <Link to="/profile" className="hrefs">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para a home
                    </Link>
                </section>      

                <form onSubmit={submitIncident}>
                    <input type="text" value={title} onChange={e=>{setTitle(e.target.value)}} placeholder="Titulo do caso"/>
                    <textarea value={description} onChange={e=>{setDescription(e.target.value)}} placeholder="Descrição"/>
                    <input type="text" value={value} onChange={e=>{setValue(e.target.value)}} placeholder="Valor em reais"/>
                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}