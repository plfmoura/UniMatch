import React from 'react'
import './lobby.css'

export default function Lobby({onPress}) {

    return (
        <div className='Lobby-container'>
            <div className='lobby-title'>
                <h2>Encontre suas <span className="words-gray">primeiras<br />conexões</span> acadêmicas</h2>
                <h4>Junte-se a centenas de<br />estudantes e socialize!</h4>
            </div>
            <nav className='lobby-btn-navigation'>
                <input type="button" value="Entrar com Google" />
                <input type="button" value="Entrar com Facebook" />
                <input type="button" value="Entrar com Celular" onClick={onPress} />
                <a>Problemas para iniciar sessão?</a>
            </nav>
        </div>
    )
}
