import styles from './Dashboard.module.scss';
import Header from '../header/Header';

const Dashboard = () => {
  return (
    <div className={styles.dashboard_container}>
      <Header />
    </div>
  );
};

export default Dashboard;
