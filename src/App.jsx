import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { ShopItemClass } from './components/ShopItemClass/ShopItemClass'
import { ShopItemFunc } from './components/ShopItemFunc/ShopItemFunc'

const shopItem = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}


function App() {

  return (
  <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        {/* <ShopItemFunc item = {shopItem}/> */}
        <ShopItemClass item={shopItem} />
      </div>
  </div>
  )
}

export default App
