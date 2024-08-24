import css from './MyFavorites.module.css';
import { useSelector } from 'react-redux';
import { selectFavoriteAdverts } from '../../redux/favorites/selectors';

import AdvertItem from '../../components/advertItem/AdvertItem';

const MyFavoritesPage = () => {
  const favoriteAdverts = useSelector(selectFavoriteAdverts);

  return (
    <>
      {favoriteAdverts.length === 0 ? (
        <p>No favorite items found.</p>
      ) : (
        <ul className={css.favorites}>
          {favoriteAdverts.map(advert => (
            <li key={advert._id}>
              <AdvertItem {...advert} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MyFavoritesPage;
