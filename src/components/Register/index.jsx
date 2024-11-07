import { Link } from "react-router-dom";
import Button from "../Button/index";

export default function Register() {
  return (
    <>
      <section className="flex justify-center items-center h-screen flex-col text-white">
        <div>
          <h1 className="font-playfair text-5xl underline">Cadastrar livro</h1>
        </div>
        <form className="flex justify-around items-center flex-col font-roboto_mono mt-32 border p-8 rounded-md">
          <label className="mt-10 text-xl">Título:</label> <br />
          <input className="bg-preto border-b-2 w-64 outline-none border-roxo_claro" type="text" placeholder="digite o título do livro" /> <br />
          <label className="mt-10 text-xl">Escritor(a):</label> <br />
          <input className="bg-preto border-b-2 w-64 outline-none border-roxo_claro"
            type="text"
            placeholder="digite o nome completo do autor(a)"
          />{" "}
          <br />
          <label className="mt-10 text-xl">Gênero:</label> <br />
          <input className="bg-preto border-b-2 w-64 outline-none border-roxo_claro" type="text" placeholder="insira o gênero do livro" /> <br />
          <label className="mt-10 text-xl">Ano de lançamento:</label> <br />
          <input className="bg-preto border-b-2 w-64 outline-none border-roxo_claro" type="number" placeholder="insira o ano de lançamento" />{" "}
          <br />
          <label className="mt-10 text-xl">Link:</label> <br />
          <input className="bg-preto border-b-2 w-64 outline-none border-roxo_claro"
            type="text"
            placeholder="insira o link de download do livro"
          />{" "}
          <br />
          <div className="mt-20">
            <Link to="/">
              <Button text="Voltar" />
            </Link>
            <Button text="Cadastrar" />
          </div>
        </form>
      </section>
    </>
  );
}
