import { Link, NavLink } from 'react-router-dom';
import '../styles/general.css';

const Header = () => (
    <header>
        <div className="logo"><Link to="/">Traveller</Link></div>
        <nav>
            <NavLink to="/my-travels" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                My Travels
            </NavLink>
            <NavLink to="/places-to-visit" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Places To Visit
            </NavLink>
            <NavLink to="/budget" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Budget
            </NavLink>
        </nav>
        <Link to="/login" className="login-link">
            <button className="login-btn">Log in</button>
        </Link>
        
    </header>
);

export default Header;