import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store: { favoritos }, dispatch } = useGlobalReducer()
	const handleDeleteFav = (name) => {
		dispatch({
			type: "addFav",
			payload: name
		})
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
						alt="Rick and Morty"
						style={{ height: "50px" }}
					/>
				</Link>
				<div className="ml-auto">

					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos({favoritos.length})
						</button>
						<ul className="dropdown-menu">

							{
								favoritos?.map(fav => (
									<li><a className="dropdown-item" href="#">{fav}
										<button className="btn btn-outline-danger">
											<i className="fa-solid fa-trash" onClick={() => handleDeleteFav(fav)}></i>
										</button>

									</a></li>
								))
							}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};