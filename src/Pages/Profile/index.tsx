import React, {useEffect, useState, FormEvent} from 'react';

import { Link, useHistory } from 'react-router-dom';

import api from '../../services/apiDataService'

import "./styles.scss"
import {FiPower, FiTrash2} from 'react-icons/fi'
import logoImg from  '../../assets/logo.svg'
import Occurrencies from '../../Entities/occurrencies';

export default function Profile()
{
    let ongName = localStorage.getItem('ongName');
    let ongId = localStorage.getItem('ongId');
    let history = useHistory();

    const [profileIncidents, setProfileIncidents] = useState([Occurrencies]);
    useEffect(()=>
    {
        if(!ongId)
        {
            history.push('/');
        }
        api.get(`/incidents/${ongId}`).then(e=>
        {
            setProfileIncidents(e.data);
        })
    },[ongId]);
    

    function removeIncident(e: FormEvent, incident: any)
    {
        try 
        {
            e.preventDefault();
            api.delete(`/incidents`,{
                headers:
                {
                    Authorization:ongId
                },
                data:
                {
                    id: incident.id
                }
            },).then(e=>
            {
                setProfileIncidents(profileIncidents.filter(incidents => incidents.id != incident.id));
            });
        } 
        catch (err) 
        {
            console.log(err);
        }
        
    }

    function logOut()
    {
        localStorage.clear();
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero"/>
                <span>Bem vindo(a), {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button" onClick={(e)=>logOut()}>
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>
            <h1>Casos registrados</h1>
            <ul>
                {
                    profileIncidents.map((e,index)=>(
                        <li id={e.id} key={e.id}>
                        <strong>CASO:</strong>
                        <p>{e.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{e.description}</p>

                        <strong>VALOR:</strong>
                        <p>120.00</p>

                        <button type="button" onClick={(event)=> removeIncident(event,e)}>
                            <FiTrash2 size={20} color="#A8A8B3"></FiTrash2>
                        </button>
                    </li>
                    ))
                }
            </ul>
        </div>
    );
}
