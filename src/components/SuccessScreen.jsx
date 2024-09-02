import React, { useEffect, useState } from 'react';
import "../../public/css/SuccessScreen.css";;

export function SuccessScreen({ onClose }) {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(onClose, 500);
        }, 2500); 

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
