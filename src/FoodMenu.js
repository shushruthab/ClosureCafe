import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ foods, title }) {
    const navigate = useNavigate();
    let foodtype = title.toLowerCase();
    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/${foodtype}/add`);
    }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            Consider this list of {foodtype} to choose from!
          </CardText>
          <ListGroup>
            {foods.map(food => (
              <Link to={`/${title.toLowerCase()}/${food.id}`} key={food.id}>
                <ListGroupItem>{food.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <button onClick={handleClick}>Add an item</button>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
