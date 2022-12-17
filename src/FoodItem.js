import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, cantFind }) {
  const { id } = useParams();
  let navigate = useNavigate();
  let fooditem = items.find(fooditem => fooditem.id === id);
    if (!fooditem) {
        return(
            <>
            <Navigate to="/" />
            </>
        )
    }

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {fooditem.name}
          </CardTitle>
          <CardText className="font-italic">{fooditem.description}</CardText>
          <p>
            <b>Recipe:</b> {fooditem.recipe}
          </p>
          <p>
            <b>Serve:</b> {fooditem.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
