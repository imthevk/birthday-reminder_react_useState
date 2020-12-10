import { useState } from "react";
import "./App.css";
import List from "../src/List";
import people from "./data";

function App() {
  const [detail, setDetail] = useState(people);
  // console.log(List);

  return (
    <main>
      <section className="container">
        <h3>{detail.length} birthday today</h3>
        <List peoplesData={detail} />
        <button onClick={() => setDetail([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
