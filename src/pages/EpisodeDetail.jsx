
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const EpisodeDetail = () => {
  const { id } = useParams();
  const { store } = useGlobalReducer();
  const ep = store.episodes?.find((e) => e.id === Number(id));
  if (!ep) return <h2>Cargando...</h2>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 d-flex align-items-center justify-content-center bg-warning rounded"
             style={{ height: "250px" }}>
          <i className="fa-solid fa-tv fa-6x text-white"></i>
        </div>
        <div className="col-md-8">
          <h1>{ep.name}</h1>
          <p>Episode: {ep.episode}</p>
          <p>Air date: {ep.air_date}</p>
          <p>Characters: {ep.characters?.length}</p>
        </div>
      </div>
    </div>
  );
};
export default EpisodeDetail;