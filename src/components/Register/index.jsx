import { Link } from "react-router-dom";
import Button from "../Button/index";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [book, setBook] = useState({});
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [link, setLink] = useState("");

  const registerBook = async () => {
    try {
      const data = await axios.post(
        "https://book-burst.onrender.com/createBook",
        {
          title: title,
          writer: writer,
          genre: genre,
          year_release: year,
          link: link,
        }
      );
      setBook(data.data);
    } catch (error) {
      console.error("Erro ao cadastrar o livro:", error);
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="flex justify-center items-center h-screen flex-col text-white">
        <div>
          <h1 className="font-playfair text-5xl underline">Cadastrar livro</h1>
        </div>
        <div className="mt-10">
          <p className="text-xl">{book.newBook}</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-around items-center flex-col font-roboto_mono mt-10 border p-8 rounded-md"
        >
          <label className="mt-10 text-xl">Título:</label> <br />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="bg-preto border-b-2 w-64 outline-none border-roxo_claro"
            type="text"
            placeholder="digite o título do livro"
          />{" "}
          <br />
          <label className="mt-10 text-xl">Escritor(a):</label> <br />
          <input
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
            required
            className="bg-preto border-b-2 w-64 outline-none border-roxo_claro"
            type="text"
            placeholder="digite o nome completo do autor(a)"
          />{" "}
          <br />
          <label className="mt-10 text-xl">Gênero:</label> <br />
          <input
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
            className="bg-preto border-b-2 w-64 outline-none border-roxo_claro"
            type="text"
            placeholder="insira o gênero do livro"
          />{" "}
          <br />
          <label className="mt-10 text-xl">Ano de lançamento:</label> <br />
          <input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            className="bg-preto border-b-2 w-64 outline-none border-roxo_claro"
            type="number"
            placeholder="insira o ano de lançamento"
          />{" "}
          <br />
          <label className="mt-10 text-xl">Link:</label> <br />
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
            className="bg-preto border-b-2 w-64 outline-none border-roxo_claro"
            type="text"
            placeholder="insira o link de download do livro"
          />{" "}
          <br />
          <div className="mt-20">
            <Link to="/">
              <Button text="Voltar" />
            </Link>
            <Button onClick={registerBook} text="Cadastrar" />
          </div>
        </form>
      </section>
    </>
  );
}
