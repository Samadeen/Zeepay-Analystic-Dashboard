import { cards } from '@/app/constant/data';
import styles from './Tabs.module.scss';
import Cards from '../cards/Cards';

const Tabs = () => {
  return (
    <div className={styles.tab_container}>
      {cards.map((card) => (
        <Cards
          amount={card.amount.toString()}
          graph={card.graph}
          key={card.title}
          rate={card.rate}
          title={card.title}
          trend={card.trend}
          up={card.up}
          img={card.img}
        />
      ))}
    </div>
  );
};

export default Tabs;
