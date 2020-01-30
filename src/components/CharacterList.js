import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./CharacterCard"

export default function CharacterList(params) {

  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);

  const temp = [];

  useEffect(() => {

    console.log(params.value.SEARCH);

    axios.get("https://rickandmortyapi.com/api/character/").then(response => {

      response.data.results.forEach(data => {
        if (params.value.SEARCH === undefined)
          temp.push(<Card ID={data.id} name={data.name} status={data.status} species={data.species} gender={data.gender} img={data.image} />);
        else if (data.name.includes(params.value.SEARCH))
          temp.push(<Card ID={data.id} name={data.name} status={data.status} species={data.species} gender={data.gender} img={data.image} />);
        setCards(temp);
      });

      setData(response.data.results);

    }).catch((error) => console.log(error)).finally(() => {});

  }, []);

  return (

    <section className="character-list" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {cards}
    </section>
  );
}
