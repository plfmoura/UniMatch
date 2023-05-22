import React from 'react'
import './register.css'

export default function Register({onPress}) {

    return (
        <div className='Register-container'>
            <div className='register-title'>
                <h2>Encontre suas <span>primeiras<br />conexões</span> acadêmicas</h2>
                <h4>Junte-se a centenas de<br />estudantes e socialize!</h4>
            </div>
            <nav className='register-btn-navigation'>
                <input type="button" value="Entrar com Google" />
                <input type="button" value="Entrar com Facebook" />
                <input type="button" value="Entrar com Celular" onClick={onPress} />
                <a>Problemas para iniciar sessão?</a>
            </nav>
        </div>
    )
}
