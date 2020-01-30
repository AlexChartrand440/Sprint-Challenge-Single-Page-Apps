import React, { useState } from "react";

export default function SearchForm() {

  const [value, setValue] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    window.location = "/characters/" + value;
  }
 
  return (
    <section className="search-form" style={{background: "red", marginBottom: "30px"}}>
      <form onSubmit={event => handleSubmit(event)} style={{width: "100%", display: "flex"}}>
        <input onChange={event => setValue(event.target.value)}  type="text" placeholder="Search for your favorite..." style={{width: "100%", height: "32px", borderStyle: "none", padding: "5px", background: "#EEEEEE", outline: "none"}} />
      </form>
    </section>
  );
}
