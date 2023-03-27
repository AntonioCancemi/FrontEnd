import Button from "./components/Button";
import Img from "./components/Img";
import "./App.css";

const App = function () {
  return (
    <div className="App">
      <header className="App-header">
        <div id="first">
          <h2>Esercizio 1: Bottone</h2>
          <Button _id="next" text="Clicca per procedere" />
        </div>
        <div>
          <h2>esercizio 2: </h2>
          <Img
            src="https://bonkaday.com/wp-content/uploads/2014/08/Immagini-belle-per-sfondi-Desktop-41-600x450.jpg"
            alt="landscape"
          />
          <h2>Componente Img in assenza dell'attributo src</h2>
          <Img alt="landspace" />
        </div>
      </header>
    </div>
  );
};

export default App;
