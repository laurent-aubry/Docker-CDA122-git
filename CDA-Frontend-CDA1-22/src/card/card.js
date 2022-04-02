import React from "react";
import { NavLink } from "react-router-dom";

import "./card.css";

const Card = ({route, onDelete, oeuvre}) => {
  const confirmDeleteHandler = async () => {
    // alert("élément suprrimé")
    // console.log("élément suprrimé")
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/${route}/${oeuvre.id}`,
        // `http://localhost:5000/api/${route}/${oeuvre.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(response.ok){
        onDelete(oeuvre.id);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card-container" role="card-item" >
      <img alt="Oeuvre" className="image" src={oeuvre.imageUrl} />
      <h2>{oeuvre.titre}</h2>
      <p>
        {oeuvre.auteur} - {oeuvre.annee}
      </p>
      <div className="card-item__actions">
        <ul>
          <li>
          <a href={`/${route}/${oeuvre.id}`}>
            <button role="card-edit">
              {/* <NavLink to={`/${route}/${oeuvre.id}`}>
                Editer
              </NavLink> */}
              Editer
            </button>
            </a>
          </li>
          <li>
            <button onClick={confirmDeleteHandler}>Supprimer</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
