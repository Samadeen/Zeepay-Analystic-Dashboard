import styles from './Platforms.module.scss';

const Platforms = () => {
  return (
    <section className={styles.platform_container}>
      <div className={styles.platform_top}>
        <h3>Top Platform</h3>
        <h4>See All</h4>
      </div>
      <div className={styles.platform_bom}>
        <div className={styles.book}>
          <h5>Book Bazaar</h5>
          <div className={styles.progress_bar}>
            <div className={styles.progress}></div>
          </div>
          <div className={styles.details}>
            <p> $2,500,000</p>
            <p>+15%</p>
          </div>
        </div>
        <div className={styles.aisle}>
          <h5>Artisan Aisle</h5>
          <div className={styles.progress_bar}>
            <div className={styles.progress}></div>
          </div>
          <div className={styles.details}>
            <p> $1,800,000</p>
            <p>+10%</p>
          </div>
        </div>
        <div className={styles.toy}>
          <h5>Toy Troop</h5>
          <div className={styles.progress_bar}>
            <div className={styles.progress}></div>
          </div>
          <div className={styles.details}>
            <p> $1,200,000</p>
            <p>+8%</p>
          </div>
        </div>
        <div className={styles.xstore}>
          <h5>XStore</h5>
          <div className={styles.progress_bar}>
            <div className={styles.progress}></div>
          </div>
          <div className={styles.details}>
            <p> $1,000,000</p>
            <p>+6%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
