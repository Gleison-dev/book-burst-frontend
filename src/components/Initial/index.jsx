import Button from "../Button";
import "./style.css";
import reading_book from "../../assets/reading_book.svg";
import { Link } from "react-router-dom";

export default function Initial() {
  return (
    <>
      <section className="flex justify-around items-center mt-36">
        <div>
          <h1 className="text-white font-playfair text-4xl space-y-3">
            Venha fazer parte da melhor <br />
            plataforma de livros <br />
            totalmente gratuita, conheça <br />
            o Book Burst. <br />
          </h1>
          <div className="mt-20">
            <Button text="Consultar livros" />
            <Link to="/registerBook">
              <Button text="Cadastrar livro" />
            </Link>
          </div>
        </div>
        <div>
          <img
            className="reading_book"
            src={reading_book}
            alt="Imagem de pessoas lendo livro"
          />
        </div>
      </section>
    </>
  );
}
