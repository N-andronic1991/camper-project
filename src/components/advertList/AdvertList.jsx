import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/adverts/selectors';
import AdvertItem from '../advertItem/AdvertItem';
import css from './AdvertList.module.css';

const AdvertList = () => {
  const adverts = useSelector(selectAdverts);
  return (
    <ul>
      {Array.isArray(adverts) &&
        adverts.map(advert => {
          return (
            <li key={advert._id} className={css.item}>
              <AdvertItem {...advert} />
            </li>
          );
        })}
    </ul>
  );
};

export default AdvertList;
