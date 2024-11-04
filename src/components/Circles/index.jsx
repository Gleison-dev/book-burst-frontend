export default function Circles({ img, alt, text }) {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="border-4 border-roxo_claro rounded-full w-48 p-4">
          <img className="w-36" src={img} alt={alt} />
        </div>
        <div className="mt-5">
          <p className="text-xl">{text}</p>
        </div>
      </div>
    </>
  );
}
