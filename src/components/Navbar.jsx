import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img 
    src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
    alt="Rick and Morty"
    style={{ height: "50px"}}
/>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};