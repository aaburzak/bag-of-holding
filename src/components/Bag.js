import React, { useState, useRef, useEffect } from 'react'
// import { Prev } from 'react-bootstrap/esm/PageItem'
import ItemList from './ItemList'

const LOCAL_STORAGE_KEY = 'bagApp.bagItems'

function Bag() {
    const [bagItems, setBagItems] =  useState([])
    const itemNameRef = useRef()

    useEffect(() => {
      const storedBagItems = JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY))
      if (storedBagItems) setBagItems(storedBagItems)
    }, [])

    useEffect(() =>{
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bagItems))
    }, [bagItems])

    function toggleBagItem(id){
      const newBagItems = [...bagItems]
      const bagItem = newBagItems(bagItem => bagItem.id === id)
      bagItem.selected = !bagItem.selected
      setBagItems(newBagItems)
    }

    function handleAddItem(e){
      const name = itemNameRef.current.value
      if(name === '') return
      console.log(name)
      setBagItems(prevItems => {
        return [...prevItems, {id: Math.floor(Math.random() * 10000), name: name, selected: false}]
      } )
      itemNameRef.current.value = null
      
    }

  return (
    <>
        <ItemList bagItems ={bagItems} toggleBagItem = {toggleBagItem} />
        <input ref={itemNameRef} type="text"/> 
        <button onClick={handleAddItem}>Add Item</button>
        <button>Remove Item</button>
        <div>Bag is Empty</div>
        </>
  )
}

export default Bag