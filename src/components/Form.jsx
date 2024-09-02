import { useState } from "react";
import "../../public/css/Form.css";

export function Form({ onSubmit }) {
  const initialForm = {
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmacaoSenha: "",
    termosAceitos: false,
  };

  const [formState, setFormState] = useState(initialForm);
  const [step, setStep] = useState(1);

  const handleInput = (event) => {
    const { value, name, type, checked } = event.target;
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateStep = () => {
    const { nome, email, telefone, senha, confirmacaoSenha, termosAceitos } = formState;

    if (step === 1) {
      if (
        nome.trim() === "" ||
        nome.trim().length < 2 ||
        nome.trim().length > 30 ||
        /\d/.test(nome.trim())
      ) {
        alert(
          "Digite um nome válido com no mínimo 2 e no máximo 30 caracteres e sem números."
        );
        return false;
      }

      const parteEmail = email.trim().split("@");
      const dominios = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];
      if (
        email.trim().length < 10 ||
        email.trim().length > 120 ||
        parteEmail.length !== 2 ||
        dominios.indexOf(parteEmail[1]) === -1
      ) {
        alert(
          "Digite um Email válido com no mínimo 10 caracteres e no máximo 120 caracteres e use um domínio válido."
        );
        return false;
      }
    }

    if (step === 2) {
      if (telefone.trim() === "" || telefone.trim().length !== 14) {
        alert("Digite um telefone válido no formato (xx)xxxxx-xxxx.");
        return false;
      }

      if (senha.trim() === "" || senha.trim().length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres.");
        return false;
      }

      if (senha.trim() !== confirmacaoSenha.trim()) {
        alert("As senhas não são iguais.");
        return false;
      }
    }

    if (step === 3 && !termosAceitos) {
      alert("Você deve aceitar os termos e condições.");
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateStep()) {
        const { confirmacaoSenha, ...dataToSubmit } = formState; 
        onSubmit(dataToSubmit);
        setFormState({ ...initialForm });
        setStep(1);
    }
};


  const formatPhoneInput = (event) => {
    let tel = event.target.value.replace(/\D/g, "");
    tel = tel.replace(/^(\d{2})(\d)/g, "($1)$2");
    tel = tel.replace(/(\d)(\d{4})$/, "$1-$2");
    setFormState({ ...formState, telefone: tel });
  };

  return (
    <div className="containerForm">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Registrar</p>
        <p className="message">
          Inscreva-se agora e tenha acesso total ao nosso aplicativo.
        </p>
        
        {step === 1 && (
          <>
            <label>
              <input
                className="input"
                type="text"
                name="nome"
                value={formState.nome}
                onChange={handleInput}
                required
              />
              <span>Nome</span>
            </label>
            <label>
              <input
                className="input"
                type="text"
                name="email"
                value={formState.email}
                onChange={handleInput}
                required
              />
              <span>Email</span>
            </label>
            <button type="button" className="next" onClick={handleNext}>
              Próximo
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <label>
              <input
                className="input"
                maxLength={14}
                type="text"
                name="telefone"
                value={formState.telefone}
                onChange={formatPhoneInput}
                required
              />
              <span>Telefone</span>
            </label>
            <label>
              <input
                className="input"
                type="password"
                name="senha"
                value={formState.senha}
                onChange={handleInput}
                required
              />
              <span>Senha</span>
            </label>
            <label>
              <input
                className="input"
                type="password"
                name="confirmacaoSenha"
                onChange={handleInput}
                required
              />
              <span>Confirme a Senha</span>
            </label>
            <button type="button" className="next" onClick={handleNext}>
              Próximo
            </button>
          </>
        )}
        {step === 3 && (
          <>
            <label className="checkbox-container">
              <input
                type="checkbox"
                name="termosAceitos"
                checked={formState.termosAceitos}
                onChange={handleInput}
                required
              />
              <span>Eu aceito os termos e condições</span>
            </label>
            <button className="submit" type="submit">
              Enviar
            </button>
          </>
        )}
        <div className="progress-bar">
          <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
        </div>
      </form>
    </div>
  );
}
