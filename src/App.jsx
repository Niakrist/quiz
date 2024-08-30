import { Logo } from "./components/ui/logo";

import s from "./App.module.css";
import { Container } from "./components/ui/container";
import { Home } from "./components/home";
import Card from "./components/ui/card/Card";

function App() {
  return (
    <>
      <header className={s.header}>
        <Logo />
      </header>
      <main className={s.main}>
        <Container>
          {/* <Home /> */}
          <Card />
        </Container>
      </main>
      <footer className={s.footer}>
        <p>
          Проект выполнен в рамках стажировки{" "}
          <a href="https://preax.ru/" target="_blank" rel="nofollow">
            preax
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
