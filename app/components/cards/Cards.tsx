import Image from 'next/image';
import styles from './Cards.module.scss';
import { useTheme } from '@/app/utils/theme-context';
import { animated, useSpring } from '@react-spring/web';
import AnimatedNumber from '@/app/utils/AnimatedNumber';

const Cards = ({ img, graph, title, amount, trend, rate, up }: Card) => {
  const { theme } = useTheme();

  return (
    <section
      style={
        theme === 'dark'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#0f172a' }
      }
      className={styles.card_container}
    >
      <div className={styles.top}>
        <Image src={img} alt={`${img}`} />
        <Image src={graph} alt={`${graph}`} />
      </div>
      <div className={styles.mid}>
        <h3>{title}</h3>
        <h2>{amount}</h2>
        {/* <AnimatedNumber value={+amount} /> */}
      </div>
      <div className={styles.bom}>
        <div
          className={styles.trend}
          style={
            up
              ? {
                  background: 'rgba(52, 202, 165, 0.12)',
                }
              : {
                  background: 'rgba(237, 84, 78, 0.12)',
                }
          }
        >
          <Image src={trend} alt={`${trend}`} />
          <small
            style={
              up
                ? {
                    color: '#34CAA5',
                  }
                : {
                    color: '#ED544E',
                  }
            }
          >
            {rate}
          </small>
        </div>
        <p>vs. previous month</p>
      </div>
    </section>
  );
};

export default Cards;
