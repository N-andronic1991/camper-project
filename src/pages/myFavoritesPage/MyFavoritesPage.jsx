import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import AdvertItem from '../../components/advertItem/AdvertItem';

const MyFavoritesPage = () => {
  const favoriteIds = useSelector(selectFavorites);
  const adverts = useSelector(state =>
    state.adverts.items.filter(advert => favoriteIds.includes(advert._id))
  );

  return (
    <ul>
      {adverts.map(advert => (
        <li key={advert._id}>
          <AdvertItem {...advert} />
        </li>
      ))}
    </ul>
  );
};

export default MyFavoritesPage;
