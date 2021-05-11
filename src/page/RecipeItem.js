import React from "react";

export const RecipeItem = (props) => {
  const { name, image, ingredientLines } = props;
  return (
    <div className="col-md-3">
      <div
        className="card py-2 text-center"
        style={{ backgroundColor: "black", color: "yellow" }}
      >
        <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
        <div className="card-body">
          <h5>{name}</h5>
        </div>

        <ul className="list-group list-group-flush" key={Math.random() * 100}>
          {ingredientLines.map((ingredient) => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
