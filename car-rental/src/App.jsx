import { Catalog, Filter, Hero, Navbar } from "./components";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <Hero />

      <Filter/>

      <Catalog/>
    </div>
  );
}

export default App;
