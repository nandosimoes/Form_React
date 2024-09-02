import React from 'react';
import "../../public/css/SuccessScreen.css";

export function SuccessScreen() {
    return (
        <div className="success-screen">
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
