import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const remove = () => {
    return setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} oggi compiono gli anni</h3>
        <List people={people} />
        <button onClick={remove}>elimina tutto</button>
      </section>
    </main>
  );
}

export default App;
