'use client';

import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import { useTheme } from './utils/theme-context';

export default function Home() {
  const { theme } = useTheme();
  return (
    <main id={theme}>
      <div className=''>
        <Sidebar />
        <Dashboard />
      </div>
    </main>
  );
}
