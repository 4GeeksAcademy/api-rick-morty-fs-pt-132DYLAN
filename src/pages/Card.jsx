import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Card = ({ id, img, name, fields = [], route, color = "secondary" }) => {

  const { dispatch, store: { favoritos } } = useGlobalReducer();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(favoritos.includes(name));
  }, [favoritos]);

  const handleFav = () => {
    dispatch({ type: "addFav", payload: name });
  };

  return (
    <div className="card h-100">

      {img ? (
        <img src={img} className="card-img-top object-fit-cover" alt={name} />
      ) : (
        <div className={`bg-${color} d-flex align-items-center justify-content-center p-5`}>
          <span className="text-white fw-bold display-1">{name[0]}</span>
        </div>
      )}

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {fields.map((f, i) => (
          <p key={i} className="card-text mb-1">
            <span className="fw-semibold">{f.label}:</span> {f.value}
          </p>
        ))}
      </div>

      <div className="card-footer d-flex justify-content-between align-items-center">
        <Link to={`${route}/${id}`} className={`btn btn-outline-${color} btn-sm`}>
          Ver más
        </Link>
        <button className="btn btn-outline-warning btn-sm" onClick={handleFav}>
          <i className={`fa-${isFav ? 'solid' : 'regular'} fa-heart`}></i>
        </button>
      </div>

    </div>
  );
};

export default Card;