import { sidebarBottom, sidebarTop } from '@/app/constant/data';
import Image from 'next/image';
import React from 'react';
import logo from '@/public/assets/logo.svg';
import styles from './Sidebar.module.scss';
import brightness from '@/public/assets/brightness.svg';
import moon from '@/public/assets/moon.svg';

const Sidebar = () => {
  return (
    <section className={styles.sidebar_container}>
      <Image src={logo} alt='logo' className={styles.head_logo} />
      <ul>
        {sidebarTop.map((side) => {
          return (
            <li>
              <Image src={side.img} alt={side.tooltip} />
              <p>{side.tooltip}</p>
            </li>
          );
        })}
        <li className={styles.theme}>
          <Image src={brightness} alt='brightness' />
          <Image src={moon} alt='darkness' />
        </li>
      </ul>
      <ul>
        {sidebarBottom.map((side) => {
          return (
            <li>
              <Image src={side.img} alt={side.tooltip} />
              <p>{side.tooltip}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;
