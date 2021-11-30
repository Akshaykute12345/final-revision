import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/news">News</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
            <li>
                <Link to="/help">help</Link>
            </li>
        </ul>
    </nav>
);

export default Header