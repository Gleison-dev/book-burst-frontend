export default function Button({ onClick, text }) {
  return (
    <>
      <button onClick={onClick} className="w-52 h-20 bg-roxo text-white rounded-2xl mr-5 font-roboto_mono hover:bg-roxo_claro">{text}</button>
    </>
  );
}
