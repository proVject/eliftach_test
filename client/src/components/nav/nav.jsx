import React from 'react';
import classes from './nav.module.css'

const Header = ({tabs, ...props}) => {
  const onClick = (e, tab) => {
    e.preventDefault()
    props.click(tab.value)
  }

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          {
            tabs.map(tab =>
              <a key={tab.value} onClick={(e) => onClick(e, tab)}>{tab.name}</a>
            )
          }
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Header;