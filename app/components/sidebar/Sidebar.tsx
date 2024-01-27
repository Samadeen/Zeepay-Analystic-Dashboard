'use client';

import { sidebarBottom, sidebarTop } from '@/app/constant/data';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/public/assets/logo.svg';
import styles from './Sidebar.module.scss';
import brightness from '@/public/assets/brightness.svg';
import moon from '@/public/assets/moon.svg';
import { motion as m } from 'framer-motion';
import { useTheme } from '@/app/utils/theme-context';

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const [switcher, setSwitcher] = useState(false);

  const switchHandler = () => {
    setSwitcher((prevState) => !prevState);
    toggleTheme();
  };

  return (
    <section
      id={theme}
      className={styles.sidebar_container}
      style={
        theme === 'dark'
          ? { backgroundColor: '#f7f8fa' }
          : { backgroundColor: '#0f172a' }
      }
    >
      <Image src={logo} alt='logo' className={styles.head_logo} />
      <ul>
        {sidebarTop.map((side) => {
          return (
            <li key={side.tooltip}>
              <Image src={side.img} alt={side.tooltip} />
              <p
                style={
                  theme === 'dark'
                    ? { backgroundColor: '#0f172a', color: '#f7f8fa' }
                    : { backgroundColor: '#34caa5', color: '#fff' }
                }
              >
                {side.tooltip}
              </p>
            </li>
          );
        })}
        <li className={styles.theme}>
          <Image src={brightness} alt='brightness' onClick={switchHandler} />
          <Image src={moon} alt='darkness' onClick={switchHandler} />
        </li>
      </ul>
      <ul>
        {sidebarBottom.map((side) => {
          return (
            <li key={side.tooltip}>
              <Image src={side.img} alt={side.tooltip} />
              <p
                style={
                  theme === 'dark'
                    ? { backgroundColor: '#0f172a', color: '#f7f8fa' }
                    : { backgroundColor: '#34caa5', color: '#fff' }
                }
              >
                {side.tooltip}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;
