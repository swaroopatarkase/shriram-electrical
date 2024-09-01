import React from 'react'
import "./Home.css"


import Item from '../component/Item/Item'
import { product ,TITLE ,TAGLINE} from '../config/data'

function Home() {
  return (
    <div>
      <h1 className='main-title'>{TITLE}</h1>
      <h4 className='tag-line'>{TAGLINE}</h4>

      <div className='item-cards-container'>
        {product.map((item) => {
          return <Item
            imgURL={item.imgURL}
            title={item.title}
            description={item.description}
            price={item.price}
            itemType={item.itemType}
          />
        })}
      </div>
    </div>
  )
}

export default Home