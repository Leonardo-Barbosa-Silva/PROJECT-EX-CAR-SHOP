import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

import './style.css';



export default function Header() {

	const itemsCart = useSelector( (state) => state.cart )

	const { isLogged } = useSelector( (state) => state.auth )

    let activeStyle = {
        textDecoration: "none",
      };

    return (
        <nav className="1-header navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink to='/list' style={ ({isActive}) => isActive ? activeStyle : null} className="navbar-brand">
                Car Shop
            </NavLink>

            <div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item ml-4">
						<NavLink to="/list" style={ ({isActive}) => isActive ? activeStyle : null} className="nav-link">
							List
						</NavLink>
					</li>
					<li className="nav-item ml-4">
						{isLogged && (
							<NavLink to="/add" style={ ({isActive}) => isActive ? activeStyle : null} className="nav-link">
								Add
							</NavLink>
						)}
					</li>
				</ul>
			</div>
			<ul className="navbar-nav ml-md-auto">
				<NavLink to="/login" style={ ({isActive}) => isActive ? activeStyle : null} className="nav-item mr-5">
					<i className="fa fa-user fa-3x" aria-hidden="true" />
				</NavLink>
				<NavLink to="/cart" style={ ({isActive}) => isActive ? activeStyle : null} className="nav-item">
					<i className="fa fa-shopping-cart fa-3x" aria-hidden="true">
						<span className="fa-counter">{itemsCart.length}</span>
					</i>
				</NavLink>
			</ul>
        </nav>
    )
}