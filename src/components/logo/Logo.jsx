import css from './Logo.module.css';
import { icons as sprite } from '../../assets/icons/index.js';

const Logo = () => {
  return (
    <div>
      <a className={css.logo} href="https://n-andronic1991.github.io/">
        CampTrade
        <svg className={css.iconVan} width="16" height="16">
          <use xlinkHref={`${sprite}#icon-van`}></use>
        </svg>
      </a>
    </div>
  );
};

export default Logo;
