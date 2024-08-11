import css from './HomePage.module.css';
const HomePage = () => {
  return (
    <div>
      <section className={css.hero}>
        <h1 className={css.heroTitle}>
          Your adventure gear hub. Rent, buy, explore
        </h1>
      </section>
      <section className={css.description}>
        <h2 className={css.title}>
          CamperTrade: Empowering Your Outdoor Adventures
        </h2>
        <p className={css.text}>
          At CamperTrade, we connect outdoor enthusiasts with the gear they need
          to explore the great outdoors. Whether you are planning a weekend
          camping trip, a cross-country road journey, or simply seeking quality
          outdoor equipment, CamperTrade is your one-stop marketplace.
        </p>
        <h3 className={css.title}>What We Offer:</h3>
        <ul>
          <li>
            <p className={css.text}>
              <b>Rent:</b> Find top-notch camping gear, RVs, and outdoor
              equipment from trusted providers near you. Whether it is a tent, a
              kayak, or a camper van, you can rent everything you need for your
              next adventure.
            </p>
          </li>
          <li>
            <p className={css.text}>
              <b>Buy:</b> Discover a wide range of new and gently-used outdoor
              gear, from backpacks to bicycles. Buy directly from fellow
              adventurers and trusted sellers who understand the value of
              quality equipment.
            </p>
          </li>
          <li>
            <p className={css.text}>
              <b>Sell:</b> Got gear that you no longer need? List your items on
              CamperTrade and connect with a community of outdoor enthusiasts
              who are looking for exactly what you have to offer. It is a
              sustainable way to pass on the joy of adventure while earning
              extra cash.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
