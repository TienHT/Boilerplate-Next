import NavbarItem from './NavbarItem';
import './Navbar.module.scss';
import classnames from 'classnames';



function Navbar({routes, isChild}) {
    
    return (
        <ul className={'nav-bar' + classnames({ ' nav-bar-children' : isChild}) }>
            {
                routes && routes.length && routes.map((route, index)=> <NavbarItem  key={index}  route={route}/>)
            }
        </ul>
    );
}

export default Navbar;