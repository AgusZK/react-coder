import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons'
import { faSun, faDesktop, faArrowRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import reactLogo from "../../logo.svg"
import './navbar.css';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

function NavBar({ usuario }) {
    return (
        <header>
            <div className='App-header'>
                <div className='logoContainer'>
                    <a href="index.html">
                        <FontAwesomeIcon className='reactLogo' icon={faReact}></FontAwesomeIcon>
                    </a>
                    <p className='usuario'>Bienvenido {usuario}!</p>
                </div>
                <ItemListContainer />
                <CartWidget />
            </div>
        </header>
    );
}

export default NavBar;