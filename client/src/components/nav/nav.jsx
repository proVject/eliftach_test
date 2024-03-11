import React from 'react';
import classes from './nav.module.css'

const Header = ({tabs, activeTab, setActiveTab, ...props}) => {
  const onClick = (e, tab) => {
    e.preventDefault()
    setActiveTab(tab.value)
  }

  return (
    <nav className={classes.nav}>
      <ul>
        {
          tabs.map(tab =>
            <li key={tab.value} className={tab.value === activeTab ? classes.activeTab : ''}>
              <a onClick={(e) => onClick(e, tab)}>{tab.name}</a>
            </li>
          )
        }
      </ul>
    </nav>
  );
};

export default Header;