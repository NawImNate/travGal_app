import Appbar from "./components/Appbar";
import Upload from "./components/Upload";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App" style={{ backgroundImage: "url(/collage.jpg)" }}>
      <Appbar />
      <Upload />
      <Gallery />
    </div>
  );
}

export default App;
