import React from 'react'

function BagItem({ bagItem, toggleBagItem }) {
    function handleSelectClick(){
        toggleBagItem(bagItem.id)
    }

  return (
    <div>
        <label>
            <input type="checkbox" checked={bagItem.selected} onChange={handleSelectClick} />
        </label>
        {bagItem.name}
    </div>
  )
}

export default BagItem