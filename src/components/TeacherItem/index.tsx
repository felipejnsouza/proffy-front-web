import React from 'react'

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/65987036?s=400&v=4" alt="Felipe Souza"/>
            <div>
                <strong>Felipe Souza</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
           Entusiasta das melhores tecnologias de química avançada.
           <br/><br/>
           Apaixodado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. 
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 60,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="WhatsappIcon"/>
                Entrar em contato.
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;