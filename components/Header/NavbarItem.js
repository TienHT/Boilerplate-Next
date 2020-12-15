import Link from 'next/link';
import Navbar from './Navbar';
import './Navbar.module.scss';


function NavbarItem({route}) {
    return (
        <li className={`nav-bar__item`}>
            <Link href={route.path}>
                <a className={`nav-bar__link`}>{route.title}</a>
            </Link>
            {
                route.children && <Navbar isChild={true} routes={route.children} />
            }
        </li>
    );
}

export default NavbarItem;