import logo from "../../assets/logo.svg"

export default function Header() {
  return (
    <>
      <section>
        <div className="flex justify-center h-40 items-center bg-branco">
          <div>
            <img src={logo} alt="Logo do Book Burst" />
          </div>
        </div>
        <hr className=" border-4 border-roxo"/>
      </section>
    </>
  )
}