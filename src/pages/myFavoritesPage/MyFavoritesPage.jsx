import { useSelector } from 'react-redux';
import { selectFavoriteAdverts } from '../../redux/favorites/selectors';

import AdvertItem from '../../components/advertItem/AdvertItem';

const MyFavoritesPage = () => {
  const favoriteAdverts = useSelector(selectFavoriteAdverts);

  return (
    <ul>
      {favoriteAdverts.map(advert => (
        <li key={advert._id}>
          <AdvertItem {...advert} />
        </li>
      ))}
    </ul>
  );
};

export default MyFavoritesPage;
