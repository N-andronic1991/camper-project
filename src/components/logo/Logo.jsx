import css from './Logo.module.css';
import { icons as sprite } from '../../assets/icons/index.js';

const Logo = () => {
  return (
    <div>
      <a
        className={css.logo}
        href="http://N-andronic1991.github.io/camper-project/#"
      >
        CampTrade
        <svg className={css.iconVan} width="24" height="24">
          <use xlinkHref={`${sprite}#icon-van`}></use>
        </svg>
      </a>
    </div>
  );
};

export default Logo;
