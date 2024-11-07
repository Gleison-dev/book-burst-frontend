import { Link } from "react-router-dom";

export default function Link({to, text}) {
  return (
    <>
      <Link to={to}>
        {" "}
        <button className="w-52 h-20 bg-roxo text-white rounded-2xl mr-5 font-roboto_mono hover:bg-roxo_claro">
          {text}
        </button>
      </Link>
    </>
  );
}
