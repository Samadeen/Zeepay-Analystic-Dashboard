import marcus from '@/public/assets/marcus.svg';
import jaydon from '@/public/assets/jaydon.svg';
import corey from '@/public/assets/corey.svg';
import cooper from '@/public/assets/cooper.svg';
import phillip from '@/public/assets/phillip.svg';
import coin from '@/public/assets/coin.svg';
import box_tick from '@/public/assets/box-tick.svg';
import d_rotate from '@/public/assets/3d-rotate.svg';
import shopping_cart from '@/public/assets/shopping-cart.svg';
import trend_up from '@/public/assets/trending-up.svg';
import trend_down from '@/public/assets/trending-down.svg';
import up_graph from '@/public/assets/up-graph.svg';
import down_graph from '@/public/assets/down-graph.svg';
import dashboard from '@/public/assets/dashboard.svg';
import stats from '@/public/assets/stats.svg';
import box from '@/public/assets/box.svg';
import setting from '@/public/assets/setting.svg';
import logout from '@/public/assets/logout.svg';
import info from '@/public/assets/info.svg';
import arrow_right from '@/public/assets/arrow-right.svg';
import discount from '@/public/assets/discount.svg';
import profile from '@/public/assets/profile-user.svg';

export const lastOrders = [
  {
    img: marcus,
    name: 'Marcus Bergson',
    date: 'Nov 15, 2023',
    amount: '$80,000',
    status: 'Paid',
  },
  {
    img: jaydon,
    name: 'Jaydon Vaccaro',
    date: 'Nov 15, 2023',
    amount: '$150,000',
    status: 'Refund',
  },
  {
    img: corey,
    name: 'Corey Schleifer',
    date: 'Nov 14, 2023',
    amount: '$87,000',
    status: 'Paid',
  },
  {
    img: cooper,
    name: 'Cooper Press',
    date: 'Nov 14, 2023',
    amount: '$100,000',
    status: 'Refund',
  },
  {
    img: phillip,
    name: 'Phillip Lubin',
    date: 'Nov 13, 2023',
    amount: '$78,000',
    status: 'Paid',
  },
];

export const cards = [
  {
    img: box_tick,
    title: 'Total Order',
    amount: 350,
    graph: up_graph,
    trend: trend_up,
    rate: '23.5%',
    up: true,
  },
  {
    img: d_rotate,
    title: 'Total Refund',
    amount: 270,
    graph: down_graph,
    trend: trend_down,
    rate: '23.5%',
    up: false,
  },
  {
    img: shopping_cart,
    title: 'Average Sales',
    amount: 1567,
    graph: down_graph,
    trend: trend_down,
    rate: '23.5%',
    up: false,
  },
  {
    img: coin,
    title: 'Total Income',
    amount: '$350.000',
    graph: up_graph,
    trend: trend_up,
    rate: '23.5%',
    up: true,
  },
];

export const sidebarTop = [
  {
    img: dashboard,
    tooltip: 'dashboard',
  },
  {
    img: stats,
    tooltip: 'stats',
  },
  {
    img: profile,
    tooltip: 'profile',
  },
  {
    img: box,
    tooltip: 'box',
  },
  {
    img: discount,
    tooltip: 'discount',
  },
  {
    img: info,
    tooltip: 'info',
  },
];

export const sidebarBottom = [
  {
    img: arrow_right,
    tooltip: 'arrow right',
  },
  {
    img: setting,
    tooltip: 'setting',
  },
  {
    img: logout,
    tooltip: 'logout',
  },
];
