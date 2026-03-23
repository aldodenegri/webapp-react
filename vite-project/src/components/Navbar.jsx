import { NavLink,Link } from "react-router";
import style from './Navbar.module.css';
function Navbar(){
    return(
        <>
            <nav>
                <NavLink className={style.link} to="/">HomePage </NavLink> {/*navlink rispetto a link aggiunge una classe active*/}
                <NavLink className={style.link} to="/Film"></NavLink>
            </nav>
        </>
    );
}export default Navbar;