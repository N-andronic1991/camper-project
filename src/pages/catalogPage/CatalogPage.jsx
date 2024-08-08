import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AdvertList from '../../components/advertList/AdvertList';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { apiGetAdverts } from '../../redux/adverts/operation';
import {
  selectAdverts,
  selectError,
  selectLimit,
  selectLoading,
  selectPage,
} from '../../redux/adverts/selectors';

import LoadMoreBtn from '../../components/loadMoreBtn/LoadMoreBtn';

const CamperCatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  useEffect(() => {
    dispatch(apiGetAdverts({ page, limit }));
  }, [dispatch, page, limit]);

  const showLoadMoreButton = adverts.length % limit === 0 && adverts.length > 0;

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {Array.isArray(adverts) && <AdvertList />}
      {showLoadMoreButton && <LoadMoreBtn />}
    </div>
  );
};

export default CamperCatalogPage;
