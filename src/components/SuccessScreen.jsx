import React, { useEffect, useState } from 'react';
import './SuccessScreen.css';

export function SuccessScreen({ onClose }) {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(onClose, 500); // Ajuste a duração da animação conforme necessário
        }, 2500); // Mantém a tela por 2.5 segundos antes de começar a transição

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`success-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="check-container">
                <div className="check-mark-container">
                    <div className="check-mark">✔</div>
                </div>
            </div>
            <div className="text-container">
                <p id="msg">Cadastrado com sucesso!</p>
            </div>
        </div>
    );
}
