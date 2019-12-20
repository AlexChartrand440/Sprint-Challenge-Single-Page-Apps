import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class CharacterCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      ID: props.ID,
      name: props.name,
      status: props.status,
      species: props.species,
      gender: props.gender,
      img: props.img

    };
  }

  redirect() { window.location = "/character/" + this.state.ID; }

  render() {
    return (
      <div style={{width: "150px"}}>
        <Card>
          <CardImg src={this.state.img} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.state.name}</CardTitle>
            <CardSubtitle>Status: {this.state.status}</CardSubtitle>
            <CardText>Species: {this.state.species} <br />
              Gender: {this.state.gender}</CardText>
            <Button onClick={() => this.redirect()}>Learn more</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CharacterCard;
