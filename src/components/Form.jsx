import { useState } from "react";
import "./Form.css";

export function Form({ onSubmit }) {
  const initialForm = {
    nome: "",
    email: "",
    telefone: "",
  };

  const [formState, setFormState] = useState(initialForm);

  const handleInput = (event) => {
    const { value, name } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const validateForm = () => {
    const { nome, email, telefone } = formState;

    const inputNameValue = nome.trim();
    const inputEmailValue = email.trim();
    const inputTelValue = telefone.trim();

    if (
      inputNameValue === "" ||
      inputNameValue.length < 2 ||
      inputNameValue.length > 30 ||
      /\d/.test(inputNameValue)
    ) {
      alert(
        "Digite um nome válido com no mínimo 2 e no máximo 30 caracteres e sem números."
      );
      return false;
    }

    const parteEmail = inputEmailValue.split("@");
    const dominios = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];
    if (
      inputEmailValue.length < 10 ||
      inputEmailValue.length > 120 ||
      parteEmail.length !== 2 ||
      dominios.indexOf(parteEmail[1]) === -1
    ) {
      alert(
        "Digite um Email válido com no mínimo 10 caracteres e no máximo 120 caracteres e use um domínio válido."
      );
      return false;
    }

    if (inputTelValue === "" || inputTelValue.length !== 14) {
      alert("Digite um telefone válido no formato (xx)xxxxx-xxxx.");
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSubmit(formState);
    setFormState({ ...initialForm });
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
        <p className="message">Inscreva-se agora e tenha acesso total ao nosso aplicativo.</p>
 
          <label>
            <input
              className="input"
              type="text"
              name="nome"
              value={formState.nome}
              onChange={handleInput}
              required
              placeholder=""
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
              placeholder=""
            />
            <span>Email</span>
          </label>
        <label>
          <input
            className="input"
            maxLength={14}
            type="text"
            name="telefone"
            value={formState.telefone}
            onChange={formatPhoneInput}
            required
            placeholder=""
          />
          <span>Telefone</span>
        </label>
        <button className="submit" type="submit">Enviar</button>
      </form>
    </div>
  );
}
