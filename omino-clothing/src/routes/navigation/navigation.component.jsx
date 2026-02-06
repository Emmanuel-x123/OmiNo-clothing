import { Outlet, Link } from "react-router-dom";
// import {ReactComponent as Ominologo} from '../../assets/omino-logo2.svg';
import logo from '../../assets/omino-logo.jpeg';
import './navigation.styles.scss';


const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <img src={logo} alt="omino Logo" className="logo" />
                     {/* <Ominologo className="logo" /> */}
                </Link>  
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    <Link className="nav-link" to='/contact'>CONTACT</Link>
                    <Link className="nav-link" to='/auth'>SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;