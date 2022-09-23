import React from "react";
import '../Contatos/style.css'
export const Contato = () => {
    return (
        <div className="forminho">
            <form>
                <h1>Quer contribuir com a nossa página?</h1>
                <h3>Preencha este pequeno forms e venha conosco fazer parte dessa família!</h3>
                <fieldset className="Formul">
                    <legend>Formulário</legend>
                    <label>Número de telefone: </label>
                    <input type="text" placeholder="+00 00 000000000" />
                    <br></br>
                    <label>Instagram: </label>
                    <input type="text" placeholder="@nome.nome" />
                    <br></br>
                    <label>E-mail: </label>
                    <input type="text" placeholder="ex: nome@gmail.com" />
                    <br></br>
                    <input className="boton" type="submit" value="Enviar"></input>
                </fieldset>
            </form>
        </div>

    );
}
