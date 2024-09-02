import { useState } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Footer } from './components/Footer';
import { SuccessScreen } from './components/SuccessScreen';
import '../public/css/App.css'; 

function App() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = (data) => {
        setIsSubmitted(true);
        console.log('Dados enviados:', data);

        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <div className="app-container">
            {isSubmitted ? (
                <SuccessScreen />
            ) : (
                <>
                    <Header title={'Cadastro de usuários'} />
                    <Form onSubmit={handleFormSubmit} />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
