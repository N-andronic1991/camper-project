import css from './CatalogPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import AdvertList from '../../components/advertList/AdvertList';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import LoadMoreBtn from '../../components/loadMoreBtn/LoadMoreBtn';
import SearchBar from '../../components/searchBar/SearchBar';
import { apiGetAdverts } from '../../redux/adverts/operation';
import {
  selectAdverts,
  selectError,
  selectLimit,
  selectLoading,
  selectPage,
} from '../../redux/adverts/selectors';
import { selectSelectedAdvertId } from '../../redux/modal/selectors';
import BaseModal from '../../components/baseModal/BaseModal';
import AdvertModalContent from '../../components/advertModalContent/AdvertModalContent';
import Container from '../../components/container/Container';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const selectedAdvertId = useSelector(selectSelectedAdvertId);
  const selectedAdvert = useSelector(state =>
    state.adverts.items.find(advert => advert._id === selectedAdvertId)
  );

  useEffect(() => {
    dispatch(apiGetAdverts({ page, limit }));
  }, [dispatch, page, limit]);

  const showLoadMoreButton = adverts.length % limit === 0 && adverts.length > 0;

  return (
    <Container>
      <div className={css.catalogContainer}>
        <div className={css.filtersThumb}>
          <SearchBar />
        </div>
        <div>
          {loading && <Loader />}
          {error && <ErrorMessage />}
          {Array.isArray(adverts) && <AdvertList />}
          {showLoadMoreButton && <LoadMoreBtn />}
          <BaseModal>
            {selectedAdvert && (
              <AdvertModalContent
                name={selectedAdvert.name}
                reviews={selectedAdvert.reviews}
                location={selectedAdvert.location}
                price={selectedAdvert.price}
                gallery={selectedAdvert.gallery}
                description={selectedAdvert.description}
              />
            )}
          </BaseModal>
        </div>
      </div>
    </Container>
  );
};

export default CatalogPage;
