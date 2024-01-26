import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';

export default function Home() {
  return (
    <main>
      <div className=''>
        <Sidebar />
        <Dashboard />
      </div>
    </main>
  );
}
