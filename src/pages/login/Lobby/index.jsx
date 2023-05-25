import React from 'react'
import './lobby.css'
import Button from '../../../components/Button'

export default function Lobby({onPress}) {

    return (
        <div className='Lobby-container'>
            <div className='lobby-title'>
                <h2>Encontre suas <span className="words-gray">primeiras<br />conexões</span> acadêmicas</h2>
                <h4>Junte-se a centenas de<br />estudantes e socialize!</h4>
            </div>
            <nav className='lobby-btn-navigation'>
                <Button variant={"primary-btn"} text={"Entrar com Google"}/>
                <Button variant={"primary-btn"} text={"Entrar com Facebook"}/>
                <Button variant={"primary-btn"} text={"Entrar com Celular"} onPress={onPress}/>
                <a>Problemas para iniciar sessão?</a>
            </nav>
        </div>
    )
}
