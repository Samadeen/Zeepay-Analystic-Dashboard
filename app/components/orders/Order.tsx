import { lastOrders } from '@/app/constant/data';
import styles from './Order.module.scss';
import Image from 'next/image';
import view from '@/public/assets/document-download.svg';
import { useTheme } from '@/app/utils/theme-context';

const Order = () => {
  const { theme } = useTheme();

  return (
    <section
      style={
        theme === 'dark'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#0f172a' }
      }
      className={styles.order_container}
    >
      <div className={styles.head}>
        <h3>Last Orders</h3>
        <h4>See All</h4>
      </div>
      <div className={styles.body}>
        <div className={styles.body_top}>
          <h5>Name</h5>
          <h5>Date</h5>
          <h5>Amount</h5>
          <h5>Status</h5>
          <h5>Invoice</h5>
        </div>
        <div className={styles.body_bom}>
          {lastOrders.map((order, idx) => {
            return (
              <div className={styles.whole} key={idx}>
                <div className={styles.name}>
                  <Image src={order.img} alt={`${order.name}`} />
                  <h6>{order.name}</h6>
                </div>
                <h6 className={styles.date}>{order.date}</h6>
                <h6>{order.amount}</h6>
                <h6
                  style={
                    order.status === 'Paid'
                      ? {
                          color: '#34CAA5',
                        }
                      : {
                          color: '#ED544E',
                        }
                  }
                >
                  {order.status}
                </h6>
                <div className={styles.view}>
                  <Image alt='document-view icon' src={view} />
                  <h6 className={styles.view}>View</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Order;
