import { Link } from "react-router-dom";
import Button from "../Button/index";

export default function Register() {
  return (
    <>
      <section className="text-white">
        <div>
          <h1 className="font-playfair">Cadastrar livro</h1>
        </div>
        <form>
          <label>Título:</label> <br />
          <input type="text" placeholder="digite o título do livro" /> <br />
          <label>Escritor(a):</label> <br />
          <input
            type="text"
            placeholder="digite o nome completo do autor(a)"
          />{" "}
          <br />
          <label>Gênero:</label> <br />
          <input type="text" placeholder="insira o gênero do livro" /> <br />
          <label>Ano de lançamento:</label> <br />
          <input type="number" placeholder="insira o ano de lançamento" />{" "}
          <br />
          <label>Link:</label> <br />
          <input
            type="text"
            placeholder="insira o link de download do livro"
          />{" "}
          <br />
          <div>
            <Link to="/">
              <Button text="Voltar"/>
            </Link>
            <Button text="Cadastrar"/>
          </div>
        </form>
      </section>
    </>
  );
}
