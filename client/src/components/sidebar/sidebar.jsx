import React from 'react';
import classes from "./sidebar.module.css";
import EtButton from '../ui/button/button.jsx'

const Sidebar = ({tabs, activeTab, setActiveTab, ...props}) => {
  const onClick = (e, tab) => {
    e.preventDefault()
    setActiveTab(tab.id)
  }

  return (
    <div className={classes.sidebar}>
      {
        tabs.map(tab =>
          <EtButton
            key={tab.id}
            className={tab.id === activeTab ? classes.activeTab : ''}
            onClick={(e) => onClick(e, tab)}
          >
            {tab.name}
          </EtButton>
        )
      }
    </div>
  );
};

export default Sidebar;