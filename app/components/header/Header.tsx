'use client';

import styles from './Header.module.scss';
import search from '@/public/assets/search.svg';
import calender from '@/public/assets/calender.svg';
import notification from '@/public/assets/notification.svg';
import justin from '@/public/assets/justin.svg';
import arrow from '@/public/assets/arrow-down.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.right}>
        <h1>Dashboard</h1>
        <label htmlFor='search'>
          <Image src={search} alt='search' />
          <input type='text' placeholder='Search...' />
        </label>
      </div>
      <div className={styles.left}>
        <div className={styles.calender}>
          <div className={styles.cal}>
            <Image src={calender} alt='calender' />
            <p>November 15, 2023</p>
          </div>
          <Image src={notification} alt='notification' />
        </div>
        <div className={styles.profile}>
          <Image src={justin} alt='justin' />
          <div className={styles.name}>
            <h4>Justin Bergson</h4>
            <small>Justin@gmail.com</small>
          </div>
          <Image src={arrow} alt='arrow-down' />
        </div>
      </div>
    </header>
  );
};

export default Header;
