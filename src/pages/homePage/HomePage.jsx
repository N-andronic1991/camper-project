import css from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/container/Container';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/adverts');
  };
  return (
    <>
      <section className={`${css.hero} ${css.heroOverlay}`}>
        <Container>
          <h1 className={css.heroTitle}>
            CamperTrade: Empowering Your Outdoor Adventures
          </h1>
          <p className={css.text}>
            At CamperTrade, we connect outdoor enthusiasts with the gear they
            need to explore the great outdoors. Whether you are planning a
            weekend camping trip, a cross-country road journey, or simply
            seeking quality outdoor equipment, CamperTrade is your one-stop
            marketplace.
          </p>
          <button type="button" className={css.heroBtn} onClick={handleClick}>
            Choose your truck
          </button>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
