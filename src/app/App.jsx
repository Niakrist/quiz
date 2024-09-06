import { Header } from "@/components/Header";
import { Welcome } from "@/pages/Welcome";
import { Question } from "@/pages/Question";
import { Result } from "@/pages/Result";
import { Footer } from "@/components/Footer";
import { useState } from "react";

function App() {
  const [component, setComponent] = useState("welcome");

  const handleClick = (comp) => {
    setComponent(comp);
  };

  return (
    <>
      <Header />
      <main>
        {component === "welcome" && <Welcome onClick={handleClick} />}
        {component === "question" && <Question onClick={handleClick} />}
        {component === "result" && <Result onClick={handleClick} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
