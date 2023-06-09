'use client';
import React, { useState, useEffect, useCallback } from 'react';
/* import { useRouter } from 'next/router'; */

import styles from './DropDown.module.scss';

export default function DropDownItem(props) {
  const [click, setClick] = useState(false);

  /*  const { events } = useRouter(); */

  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);

  // using useEffect to navigate from nav to a new page
  /* useEffect(() => {
    
    events.on('routeChangeStart', closeMobileMenu);
    return () => {
      
      events.off('routeChangeStart', closeMobileMenu);
    };
  }, [closeMobileMenu, events]); */

  return (
    <li key={props.title} className={styles.dropdown_item}>
      <a
        href={props.url}
        onClick={closeMobileMenu}
        className={styles.dropdown_link}
      >
        <span className={styles.link_icon}>{props.icon}</span>
        <span className={styles.link_title}>{props.title}</span>
      </a>
      {click && props.children}
    </li>
  );
}
