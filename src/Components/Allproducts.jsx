import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import listproduct from "./data";
import { Link } from "react-router-dom";
function Allproducts() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        paddingBottom: "50px",
      }}
    >
      {listproduct.map((el) => (
        <Link to={"/product"} style={{textDecoration:"none"}}>
          <Card style={{ width: "18rem", height: "300px" }}>
          <Card.Img style={{ height: "70%" }} variant="top" src={el.image} />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>

            <Card.Text>
              <b>Price :</b> {el.price}$
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
      
      ))}
    </div>
  );
}

export default Allproducts;
