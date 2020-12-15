import BecomeAMember from "./BecomeAMember";
import Logo from "./Logo";
import Navbar from './Navbar';
import UserInfo from "./UserInfo";
import './Header.module.scss';

function Header({routes, logo, user}) {
  return (
    <header className={'global-header'}>
      <div className={'logo'}>
        <Logo logo={logo} />
      </div>
      <div>
        <Navbar routes={routes} />
      </div>
      <div>
        {
          user ? <UserInfo user={user} /> : <BecomeAMember title="Trở thành hội viên" />
        }
      </div>
    </header>
  );
}

export default Header;