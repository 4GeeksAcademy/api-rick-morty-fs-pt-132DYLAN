import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const LocationDetail = () => {
  const { id } = useParams();
  const { store } = useGlobalReducer();
  const loc = store.locations?.find((l) => l.id === Number(id));
  if (!loc) return <h2>Cargando...</h2>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 d-flex align-items-center justify-content-center bg-success rounded"
             style={{ height: "250px" }}>
          <i className="fa-solid fa-earth-americas fa-6x text-white"></i>
        </div>
        <div className="col-md-8">
          <h1>{loc.name}</h1>
          <p>Type: {loc.type}</p>
          <p>Dimension: {loc.dimension}</p>
          <p>Residents: {loc.residents?.length}</p>
        </div>
      </div>
    </div>
  );
};
export default LocationDetail;