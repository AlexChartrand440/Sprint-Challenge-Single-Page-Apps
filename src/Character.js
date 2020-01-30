import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/Navigation";
import { Jumbotron, Button } from 'reactstrap';

export default function Character(props) {

  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [gender, setGender] = useState();
  const [species, setSpecies] = useState();
  const [loc, setLocation] = useState([]);
  const [epButtons, setEpButtons] = useState([]);

  const temp = [];

  useEffect(() => {

    if (props.match.params.ID !== undefined) {

      axios.get("https://rickandmortyapi.com/api/character/" + props.match.params.ID).then(response => {

        setImg(response.data.image);
        setName(response.data.name);
        setStatus(response.data.status);
        setGender(response.data.gender);
        setSpecies(response.data.species);
        setLocation(response.data.location);

        response.data.episode.forEach(data => { temp.push(<Button style={{width: "150px", margin: "5px"}}>Episode {data.substring(data.lastIndexOf("/") + 1, data.length)}</Button>); });

      }).catch((error) => console.log(error)).finally(() => { 
        
        setEpButtons(temp);});

    }

  }, []);

  return (
    <main>
      <Nav />
      <Jumbotron>
        <img src={img} />
        <h1 className="display-3">{name}</h1>
        <p className="lead">{gender} {species} of {loc.name}. Current status: {status}</p>
        <hr className="my-2" />
        <p style={{fontSize: "20px"}}>Appearances:</p>
        <p className="lead" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
          {epButtons}
        </p>
      </Jumbotron>
    </main>
  );

}
