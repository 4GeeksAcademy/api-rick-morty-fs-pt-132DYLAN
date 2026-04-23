import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "./Card.jsx";

export const Home = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="text-center mt-5">

      {/* Characters */}
      <div className="container mt-5">
        <h1 className="text-danger mb-4">Characters</h1>
        <div className="d-flex overflow-auto gap-3 pb-3">
          {store.personajes?.map(el => (
            <div className="col-12 col-md-6 col-lg-4" key={el.id}>
              <Card
                id={el.id}
                img={el.image}
                name={el.name}
                route="/dynamic"
                color="danger"
                fields={[
                  { label: "Gender", value: el.gender },
                  { label: "Species", value: el.species },
                  { label: "Status", value: el.status },
                ]}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div className="container mt-5">
        <h1 className="text-success mb-4">Locations</h1>
        <div className="d-flex overflow-auto gap-3 pb-3">
          {store.locations?.map(el => (
            <div className="col-12 col-md-6 col-lg-4" key={el.id}>
              <Card
                id={el.id}
                name={el.name}
                route="/location"
                color="success"
                fields={[
                  { label: "Type", value: el.type },
                  { label: "Dimension", value: el.dimension },
                  { label: "Residents", value: el.residents?.length },
                ]}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Episodes */}
      <div className="container mt-5 mb-5">
        <h1 className="text-warning mb-4">Episodes</h1>
        <div className="d-flex overflow-auto gap-3 pb-3">
          {store.episodes?.map(el => (
            <div className="col-12 col-md-6 col-lg-4" key={el.id}>
              <Card
                id={el.id}
                name={el.name}
                route="/episode"
                color="warning"
                fields={[
                  { label: "Episode", value: el.episode },
                  { label: "Air date", value: el.air_date },
                  { label: "Characters", value: el.characters?.length },
                ]}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};






































// import { Link } from "react-router-dom";
// import rigoImageUrl from "../assets/img/rigo-baby.jpg";
// import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
// import { useEffect } from "react";
// import api_rick_morty from "../services/apirickandmorty.js";
// import Card from "./Card.jsx";

// export const Home = () => {

// 	const { store } = useGlobalReducer()



// 	return (
// 		<div className="text-center mt-5">


// 			<div className="container mt-5">
// 				<h1 className="text-danger mb-4">Characters</h1>
// 				<div className="d-flex overflow-auto gap-3 pb-3">
// 					{store.personajes?.map(el => (
// 						<div className="col-12 col-md-6 col-lg-4" key={el.id}>
// 							<Card
// 								id={el.id}
// 								img={el.image}
// 								name={el.name}
// 								gender={el.gender}
// 								species={el.species}
// 								status={el.status}
// 							/>
// 						</div>
// 					))}
// 				</div>
// 			</div>


// 			<div className="container mt-5">
// 				<h1 className="text-success mb-4">Characters</h1>
// 				<div className="d-flex overflow-auto gap-3 pb-3">
// 					{store.locations?.map(el => (
// 						<div className="col-12 col-md-6 col-lg-4" key={el.id}>
// 							<Card
// 								id={el.id}
// 								img={el.image}
// 								name={el.name}
// 								gender={el.gender}
// 								species={el.species}
// 								status={el.status}
// 							/>
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 			<div className="container mt-5">
// 				<h1 className="text-danger mb-4">Characters</h1>
// 				<div className="d-flex overflow-auto gap-3 pb-3">
// 					{store.episodes?.map(el => (
// 						<div className="col-12 col-md-6 col-lg-4" key={el.id}>
// 							<Card
// 								id={el.id}
// 								img={el.image}
// 								name={el.name}
// 								gender={el.gender}
// 								species={el.species}
// 								status={el.status}
// 							/>
// 						</div>
// 					))}
// 				</div>
// 			</div>


// 		</div>
// 	);
// }; 