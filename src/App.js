import Navbar from "./components/Navbar";

function App() {
  const linksArray = ["Products", "Services", "Overview", "Contact us"];
  return (
    <div>
      <Navbar links={linksArray} />
    </div>
  );
}

export default App;
