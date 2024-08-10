import { useSelector } from 'react-redux';
import AdvertItem from '../advertItem/AdvertItem';
import css from './AdvertList.module.css';

const AdvertList = () => {
  const adverts = useSelector(state => state.adverts.items);

  return (
    <ul>
      {Array.isArray(adverts) && adverts.length === 0 && (
        <li>
          <b>We do not have campers by this location</b>
        </li>
      )}
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
