import React from "react";
import { useState } from "react/cjs/react.development";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [search, setSearch] = useState("")
  //app is the closest parent to listings container and search so we need to set our search state here for both of them to accerss it.

  function handleSearch(newSearch){
    setSearch(newSearch)
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer search={search} />
    </div>
  );
}

export default App;
