import Circles from "../Circles";
import icon_books from "../../assets/icon_books.svg";
import icon_ideia from "../../assets/icon_ideia.svg";
import icon_library from "../../assets/icon_library.svg";

export default function Benefits() {
  return (
    <>
      <section className="bg-branco mt-40">
        <div className="flex justify-center">
          <h2 className="text-2xl">O que nós te oferecemos:</h2>
        </div>
        <div className="mt-20 flex justify-around items-center">
          <Circles
            img={icon_books}
            alt="Icóne de livros"
            text="Livros totalmente gratuitos"
          />
          <Circles
            img={icon_library}
            alt="Icóne de catálogo"
            text="Catálogo gigante"
          />
          <Circles
            img={icon_ideia}
            alt="Icóne de intuitivo"
            text="Plataforma intuitiva"
          />
        </div>
      </section>
    </>
  );
}
