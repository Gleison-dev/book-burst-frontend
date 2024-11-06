import Button from "../Button";
import "./style.css";

export default function Call() {
  return (
    <>
      <section className="flex justify-around items-center">
        <div className="left-side text-white flex justify-center flex-col items-center h-screen">
          <div>
            <h3 className="text-3xl font-roboto_mono">
              É um amante dos livros? <br />
              Venha conhecer o nosso catálogo <br />e descubra histórias
              incríveis!
            </h3>
          </div>
          <div className="mt-14 mr-80">
            <Button text="Consultrar livros" />
          </div>
        </div>
        <div className="right-side bg-roxo_claro w-96 flex justify-center h-screen items-center flex-col">
          <div>
            <h3 className="text-3xl font-roboto_mono">
              É um escritor? <br />
              Venha publicar seus livros <br />e faça parte desta comunidade!
            </h3>
          </div>
          <div className="mt-14 mr-80">
            <button className="bg-preto text-white w-52 h-20 rounded-2xl mr-5 font-roboto_mono">
              Cadastrar livro
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
