import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from './components/modal'
import '../styles/app.css';
import './scrollReveal'

const arrEditProfil = [{
        nom: 'Cleris',
        prenom: 'Loan'
    }, {
        nom: 'Chesneau',
        prenom: 'Odessa'
    }, {
        nom: 'Levy',
        prenom: 'Dan'
    } , {
        nom: 'Cuillandre',
        prenom: 'Tom'
    }
]

ReactDOM.render(
    <Router>
        <Modal 
            title='Editer mon profil'
            content={arrEditProfil}
            modaltitle='Editer mon profil'
        />
    </Router>, document.getElementById('root')
);