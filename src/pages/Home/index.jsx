import Benefits from "../../components/Benefits";
import Call from "../../components/Call";
import Header from "../../components/Header";
import Initial from "../../components/Initial";

export default function Home() {
  return (
    <>
      <section>
        <Header />
        <Initial />
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <Call />
      </section>
    </>
  )
}