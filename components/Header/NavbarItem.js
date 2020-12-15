import Link from 'next/link';
import Navbar from './Navbar';
import styles from './Navbar.module.scss';

const s = n => (styles[n]);
function NavbarItem({route}) {
    return (
        <li>
            <Link href={route.path}>
                <a>{route.title}</a>
            </Link>
            {
                route.children && <Navbar isChild={true} routes={route.children} />
            }
        </li>
    );
}

export default NavbarItem;