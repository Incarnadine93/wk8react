import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer_top">
            </div>
            <div className="footer_bottom">
                <p>© 2023 by Generic. All rights reserved.</p>
                <div>
                    <Link className="nav-item-footer nav-link" to="/">Legal &nbsp;|</Link>
                    <Link className="nav-item-footer nav-link" to="/"> &nbsp;Patent &nbsp;|</Link>
                    <Link className="nav-item-footer nav-link" to="/"> &nbsp;&nbsp;Safety Notices &nbsp;|</Link>
                    <Link className="nav-item-footer nav-link" to="/">&nbsp; Privacy Preferences &nbsp;|</Link>
                    <Link className="nav-item-footer nav-link" to="/">&nbsp; Privacy &nbsp;|</Link>
                    <Link className="nav-item-footer nav-link" to="/">&nbsp; Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;