import React from "react";
import Nav from "./components/Navigation";
import Search from "./components/SearchForm";
import CharacterList from './components/CharacterList';

export default function Characters(props) {
  return (
    <main>
      <Nav />
      <Search />
      <CharacterList value={props.match.params}/>
    </main>
  );
}
