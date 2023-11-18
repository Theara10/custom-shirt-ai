import Canvas from "./canvas";
import Home from "./pages/Home";
import Customier from "./pages/Customier";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customier />
    </main>
  );
}

export default App;
