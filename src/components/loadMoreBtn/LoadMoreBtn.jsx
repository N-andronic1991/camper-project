import css from './LoadMoreBtn.module.css';
import { incrementPage } from '../../redux/adverts/slice';
import { useDispatch } from 'react-redux';
const LoadMoreBtn = () => {
  const dispatch = useDispatch();

  const loadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <button className={css.loadMoreBtn} type="button" onClick={loadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
