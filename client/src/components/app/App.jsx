import {useState} from 'react'
import classes from './App.module.css'
import EtNav from '../nav/nav.jsx'
import ElShop from '../shop/shop.jsx'
import ElShoppingCart from '../shopping-cart/shoppingCart.jsx'

function App() {
  const wrapperClasses = [classes.wrapper, 'container']?.join(' ')

  const [tabs, setTabs] = useState([
    {value: 'shop', name: 'Shop',},
    {value: 'shopping_cart', name: 'Shopping cart',},
  ])
  const [activeTab, setActiveTab] = useState('shop')

  return (
    <main className={wrapperClasses}>
      <header className={classes.header}>
        <EtNav activeTab={activeTab} tabs={tabs} setActiveTab={(tabValue) => setActiveTab(tabValue)}/>
      </header>
      {activeTab === 'shop' && <ElShop/>}
      {activeTab === 'shopping_cart' && <ElShoppingCart/>}
    </main>
  )
}

export default App
