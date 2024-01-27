import styles from './Dashboard.module.scss';
import Header from '../header/Header';
import Chart from '../chart/Chart';
import Tabs from '../tabs/Tabs';
import Order from '../orders/Order';
import Platforms from '../platforms/Platforms';
import { useTheme } from '@/app/utils/theme-context';

const Dashboard = () => {
  const { theme } = useTheme();
  return (
    <div id={theme} className={styles.dashboard_container}>
      <Header />
      <div className={styles.top_content}>
        <Chart />
        <Tabs />
      </div>
      <div className={styles.bottom_content}>
        <Order />
        <Platforms />
      </div>
    </div>
  );
};

export default Dashboard;
