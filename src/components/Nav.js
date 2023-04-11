import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar">
                <div class="nav">
                    <Link className="nav-item-brand nav-link" to="/">Generic</Link>
                    <Link className="nav-item nav-link" to='Shop'>PRODUCTS</Link>
                    <Link className="nav-item nav-link" to='support'>SUPPORT</Link>
                    <Link className="nav-item nav-link" to='sign/log'><i class="fa-regular fa-user-helmet-safety fa-beat-fade"></i>SIGN UP / LOG IN</Link>
                </div>
            </nav>
        </div>
    );
}

export default Nav;