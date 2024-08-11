import css from './Navigation.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import Logo from '../logo/Logo';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <Logo />
      <NavLink className={getNavLinkClassName} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/adverts">
        Catalog
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/favorites">
        My favorites
      </NavLink>
    </nav>
  );
};
export default Navigation;
