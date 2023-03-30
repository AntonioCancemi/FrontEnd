import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <MyNav brand="Book-IT" />
        <MyJumbotron />
        <AllTheBooks />
        <MyFooter id="footer" />
      </div>
    </div>
  );
}

export default App;
