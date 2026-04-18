import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import api_rick_morty from "../services/apirickandmorty.js";
import Card from "./Card.jsx";

export const Home = () => {

	const { store } = useGlobalReducer()



	return (
		<div className="text-center mt-5">


			<div className="container mt-5">
				<h1 className="text-danger mb-4">Characters</h1>
				<div className="d-flex overflow-auto gap-3 pb-3">
					{store.personajes?.map(el => (
						<div className="col-12 col-md-6 col-lg-4" key={el.id}>
							<Card
								id={el.id}
								img={el.image}
								name={el.name}
								gender={el.gender}
								species={el.species}
								status={el.status}
							/>
						</div>
					))}
				</div>
			</div>


		</div>
	);
}; 