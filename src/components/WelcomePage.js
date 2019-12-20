import React from "react";
import { Button } from 'reactstrap';

export default function WelcomePage() {

  function redirect(url) {

    window.location = url;

  }

  return (
    <section className="welcome-page">

      <header stlye={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Welcome to the ultimate fan site!</h1>
        <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
          <Button color="secondary" onClick={() => redirect("/characters")} style={{height: "40px"}}>Characters</Button>
        </div>
      </header>
    </section>
  );
}