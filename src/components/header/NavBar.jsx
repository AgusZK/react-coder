import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import './navbar.css';
import CartWidget from './CartWidget';
import List from './List';
import { Link } from 'react-router-dom';

function NavBar({ usuario }) {
	return (
		<header>
			<div className="App-header">
				<div className="logoContainer">
					<a href="index.html">
						<FontAwesomeIcon
							className="reactLogo"
							icon={faReact}
						></FontAwesomeIcon>
					</a>
				</div>
				<List />
				<Link to="/cart">
					<CartWidget />
				</Link>
			</div>
		</header>
	);
}

export default NavBar;
