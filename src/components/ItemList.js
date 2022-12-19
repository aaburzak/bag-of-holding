import React from 'react';
import BagItem from './BagItem';


function ItemList({ bagItems, toggleBagItem }) {
  return (
   bagItems.map(bagItem =>{
    return <BagItem key={bagItem.id} toggleBagItem = {toggleBagItem} bagItem = {bagItem} />
   })
    
  )
}

export default ItemList