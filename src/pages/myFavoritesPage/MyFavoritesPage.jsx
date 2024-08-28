import css from './MyFavoritesPage.module.css';
import { useSelector } from 'react-redux';
import { selectFavoriteAdverts } from '../../redux/favorites/selectors';
import { selectSelectedAdvertId } from '../../redux/modal/selectors';
import AdvertItem from '../../components/advertItem/AdvertItem';
import BaseModal from '../../components/baseModal/BaseModal';
import AdvertModalContent from '../../components/advertModalContent/AdvertModalContent';

const MyFavoritesPage = () => {
  const favorites = useSelector(selectFavoriteAdverts);
  const selectedAdvertId = useSelector(selectSelectedAdvertId);

  const selectedfavorites = favorites.find(
    favorite => favorite._id === selectedAdvertId
  );
  // const dispatch = useDispatch();

  // const handleOpenModal = advertId => {
  //   dispatch(setSelectedAdvert(advertId));
  //   dispatch(openModal());
  // };

  return (
    <>
      {favorites.length === 0 ? (
        <p>No favorite items found.</p>
      ) : (
        <ul className={css.favorites}>
          {favorites.map(advert => (
            <li key={advert._id}>
              <AdvertItem {...advert} />
            </li>
          ))}
        </ul>
      )}
      <BaseModal>
        {selectedfavorites && (
          <AdvertModalContent
            name={selectedfavorites.name}
            reviews={selectedfavorites.reviews}
            location={selectedfavorites.location}
            price={selectedfavorites.price}
            gallery={selectedfavorites.gallery}
            description={selectedfavorites.description}
          />
        )}
      </BaseModal>
    </>
  );
};

export default MyFavoritesPage;
