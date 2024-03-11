import {useState} from 'react'
import classes from './App.module.css'
import EtNav from '../nav/nav.jsx'

function App() {
  const wrapperClasses = [classes.wrapper, 'container']?.join(' ')

  const [tabs, setTabs] = useState([
    { value: 'shop', name: 'Shop', },
    { value: 'shopping_cart', name: 'Shopping cart', },
  ])
  const [activeTab, setActiveTab] = useState('medicine')

  return (
    <main className={wrapperClasses}>
      <header>
        <EtNav activeTab={activeTab} tabs={activeTab} onClick={(tabValue) => setActiveTab(tabValue)} />
      </header>
    </main>
  )
}

export default App
