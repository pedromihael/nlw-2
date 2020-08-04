import React from 'react';
import whastappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/16158197?s=460&u=2458ce95ab260c9232b28953cb83b64679318a82&v=4"
                    alt="Lucas Ribeiro" />
                <div>
                    <strong>Lucas Ribeiro</strong>
                    <span>quimica</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de quimica avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiencias.
        </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$80,00</strong>
                </p>
                <button>
                    <img src={whastappIcon} alt="whatsapp" />
                Entrar em contato
            </button>

            </footer>
        </article>
    )
}

export default TeacherItem;